// import React from 'react';
// import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
// import {NavigationProp, useNavigation} from '@react-navigation/native';
// import {RootStackParamList} from '../screens/HomeScreen';
// import {WithLocalSvg} from 'react-native-svg';

// // Header.tsx 파일 상단에 추가
// import BlueHeartIcon from '../assets/svg/blue-heart-icon.svg';
// // export {default as BlueHeartIcon} from '../assets/svg/blue-heart-icon.svg';

// // -------------------- 헤더 --------------------
// export function Header() {
//   // 네비게이션 사용 (헤더에서 로고 클릭 시 Home으로 이동)
//   //   const navigation = useNavigation();
//   //   const navigation = useNavigation<NavigationProp<RootStackParamList>>();
//   const navigation = useNavigation<NavigationProp<RootStackParamList>>();

//   return (
//     <View style={styles.headerContainer}>
//       {/* 로고 부분 */}
//       <View style={styles.headerLeft}>
//         {/* 로고를 누르면 Home으로 이동하도록 */}
//         <TouchableOpacity onPress={() => navigation.navigate('Home')}>
//           {/* <Image
//             // source={{
//             //   uri: 'https://via.placeholder.com/40/007BFF/FFFFFF?text=Logo',
//             // }}
//             source={{BlueHeartIcon}}
//             style={styles.logo}
//           /> */}
//           <BlueHeartIcon width={40} height={40} style={styles.logo} />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>BLUE HEART</Text>
//       </View>

//       {/* 오른쪽 아이콘들 (알림, 프로필 등) */}
//       <View style={styles.headerRight}>
//         <TouchableOpacity style={{marginRight: 16}}>
//           <Image
//             source={{
//               uri: 'https://img.icons8.com/ios-filled/50/000000/appointment-reminders.png',
//             }}
//             style={styles.icon}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
//           <Image
//             source={{uri: 'https://via.placeholder.com/40'}}
//             style={styles.profileImage}
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   // 헤더 스타일
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 16,
//     height: 56,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   headerLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 40,
//     height: 40,
//     resizeMode: 'contain',
//     marginRight: 8,
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     tintColor: '#333',
//     resizeMode: 'contain',
//   },
//   profileImage: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     resizeMode: 'cover',
//   },
// });

import React, {useRef, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../screens/HomeScreen';
import {WithLocalSvg} from 'react-native-svg';

// Header.tsx 파일 상단에 추가
import BlueHeartIcon from '../assets/svg/blue-heart-icon.svg';
import {DropDown} from './Dropdown';

// -------------------- 알림 드롭다운 컴포넌트 (예시) --------------------
// import {NotificationsDropdown} from './NotificationsDropdown';

export function Header() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // 알림 드롭다운 표시 여부
  const [showDropdown, setShowDropdown] = useState(false);

  // 새 알림이 있는지 여부 (예시로 true/false 하드코딩, 실제로는 서버 데이터 등에 의해 결정)
  const [hasNewNotification, setHasNewNotification] = useState(true);

  // 아이콘 애니메이션을 위한 Animated.Value
  const scaleAnim = useRef(new Animated.Value(1)).current;

  // 아이콘 애니메이션 함수
  const startIconAnimation = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2, // 아이콘 크기를 살짝 키움
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

  // 새 알림이 있는 경우 일정 간격으로 아이콘 애니메이션 반복 (예시)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (hasNewNotification) {
      // 3초마다 한번씩 애니메이션 실행 (예시)
      interval = setInterval(() => {
        startIconAnimation();
      }, 3000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [hasNewNotification]);

  // 알림 아이콘 클릭 시
  const handleNotificationPress = () => {
    // 드롭다운 열기/닫기
    setShowDropdown(!showDropdown);
    // 열었으면 새 알림 확인했다고 보고 모션 해제 (예시)
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
        {/* 알림 아이콘 */}
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

        {/* 프로필 아이콘 */}
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={{uri: 'https://via.placeholder.com/40'}}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      {/* 알림 드롭다운 표시 */}
      {showDropdown && (
        <DropDown
          style={styles.dropdownContainer}
          onClose={() => setShowDropdown(false)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  // 헤더 스타일
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

  // 드롭다운 스타일 (예시)
  dropdownContainer: {
    position: 'absolute',
    top: 56, // 헤더 높이만큼 아래로
    right: 16,
    width: 250,
    backgroundColor: '#FFF',
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
  },
});
