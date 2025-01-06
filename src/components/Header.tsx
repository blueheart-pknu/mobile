import React, {useRef, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  Modal,
  TouchableWithoutFeedback, // 바깥 터치 이벤트용
} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../screens/HomeScreen';

import BlueHeartIcon from '../assets/svg/blue-heart-icon.svg';
import {DropDown} from './Dropdown';
import Profile from '../assets/png/dummy_1.png';

export function Header() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [showDropdown, setShowDropdown] = useState(false);
  const [hasNewNotification, setHasNewNotification] = useState(true);

  const scaleAnim = useRef(new Animated.Value(1)).current;

  // 아이콘 애니메이션 함수
  const startIconAnimation = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ]).start();
  };

  // 새 알림 모션
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (hasNewNotification) {
      interval = setInterval(() => {
        startIconAnimation();
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [hasNewNotification]);

  // 알림 아이콘 클릭
  const handleNotificationPress = () => {
    setShowDropdown(!showDropdown);
    if (!showDropdown) {
      setHasNewNotification(false);
    }
  };

  return (
    <View style={styles.headerContainer}>
      {/* 로고 부분 */}
      <View style={styles.headerLeft}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <BlueHeartIcon width={40} height={40} style={styles.logo} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>BLUE HEART</Text>
      </View>

      {/* 오른쪽 아이콘들 (알림, 프로필 등) */}
      <View style={styles.headerRight}>
        <TouchableOpacity
          style={{marginRight: 16}}
          onPress={handleNotificationPress}>
          <Animated.View style={{transform: [{scale: scaleAnim}]}}>
            <Image
              source={{
                uri: 'https://img.icons8.com/ios-filled/50/000000/appointment-reminders.png',
              }}
              style={styles.icon}
            />
          </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            // source={{uri: 'https://via.placeholder.com/40'}}
            source={Profile}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      {/* 드롭다운 모달 */}
      <Modal
        visible={showDropdown}
        transparent
        animationType="fade"
        onRequestClose={() => setShowDropdown(false)}>
        {/* 배경(overlay)을 누르면 닫히도록 처리 */}
        <TouchableWithoutFeedback onPress={() => setShowDropdown(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>

        {/* 실제 드롭다운(알림 목록) */}
        <View style={styles.dropdownPosition}>
          <DropDown onClose={() => setShowDropdown(false)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 56,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#333',
    resizeMode: 'contain',
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    resizeMode: 'cover',
  },
  // 모달 배경(overlay)
  modalOverlay: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.2)',
  },
  // 드롭다운 위치
  dropdownPosition: {
    position: 'absolute',
    top: 118, // 헤더 아래
    right: 4,
    // backgroundColor: '#FFF',
  },
});
