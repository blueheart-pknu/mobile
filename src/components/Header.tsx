// src/components/Header.tsx
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
  TouchableWithoutFeedback,
} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../screens/HomeScreen';

import BlueHeartIcon from '../assets/svg/blue-heart-icon.svg';
import {DropDown} from './Dropdown';
import Profile from '../assets/png/dummy_1.png';
import {useSafeAreaInsets} from 'react-native-safe-area-context'; // 추가
import {axiosTest} from '../axios/axios';

export function Header() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Safe Area insets
  const insets = useSafeAreaInsets();

  // dropdown 등 기존 로직 그대로
  const [showDropdown, setShowDropdown] = useState(false);
  const [hasNewNotification, setHasNewNotification] = useState(true);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  // 아이콘 애니메이션
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

  const testAxios = async () => {
    try {
      const response = await axiosTest();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // paddingTop: insets.top을 줘서 상태 표시줄과 겹치지 않게
    <View
      style={[
        styles.headerContainer,
        {paddingTop: insets.top}, // 추가
      ]}>
      {/* 로고 부분 */}
      <View style={styles.headerLeft}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          {/* <TouchableOpacity onPress={testAxios}> */}
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
          <Image source={Profile} style={styles.profileImage} />
        </TouchableOpacity>
      </View>

      {/* 드롭다운 모달 */}
      <Modal
        visible={showDropdown}
        transparent
        animationType="fade"
        onRequestClose={() => setShowDropdown(false)}>
        <TouchableWithoutFeedback onPress={() => setShowDropdown(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>

        <View style={styles.dropdownPosition}>
          <DropDown onClose={() => setShowDropdown(false)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    // 기존에 height: 56이라면, insets.top을 추가해줄 수도 있습니다.
    // 예: height: 56 + insets.top (동적으로 적용하고 싶다면 inline 스타일에서 처리)
    // 여기서는 height는 빼고 paddingTop만 주는 방식도 괜찮습니다.
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
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
    width: 20,
    height: 20,
    tintColor: '#333',
    resizeMode: 'contain',
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    resizeMode: 'cover',
  },
  modalOverlay: {
    flex: 1,
  },
  dropdownPosition: {
    position: 'absolute',
    top: 118, // 필요에 맞게 조정
    right: 4,
  },
});
