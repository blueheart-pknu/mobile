/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   Dimensions,
// } from 'react-native';

// const {width} = Dimensions.get('window');

// // 헤더 컴포넌트
// function AppHeader() {
//   return (
//     <View style={styles.headerContainer}>
//       {/* 로고 부분 */}
//       <View style={styles.headerLeft}>
//         {/* 임시 로고 (Image 또는 Text) */}
//         <Image
//           source={{
//             uri: 'https://via.placeholder.com/40/007BFF/FFFFFF?text=Logo',
//           }}
//           style={styles.logo}
//         />
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
//         <TouchableOpacity>
//           <Image
//             source={{uri: 'https://via.placeholder.com/40'}}
//             style={styles.profileImage}
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// // 활동 카드 컴포넌트
// function ActivityCard({
//   title,
//   dateText,
//   progressRatio,
//   maxParticipants,
//   currentParticipants,
//   statusText,
//   imageUrl,
// }: {
//   title: string;
//   dateText: string;
//   progressRatio: number; // 0~1 사이
//   maxParticipants: number;
//   currentParticipants: number;
//   statusText?: string;
//   imageUrl: string;
// }) {
//   return (
//     <View style={styles.cardContainer}>
//       {/* 상단 이미지 */}
//       <Image source={{uri: imageUrl}} style={styles.cardImage} />

//       {/* 활동 정보 */}
//       <View style={styles.cardContent}>
//         <Text style={styles.cardTitle}>{title}</Text>
//         <Text style={styles.cardSubTitle}>{dateText}</Text>

//         {/* 간단한 Progress Bar */}
//         <View style={styles.progressBarContainer}>
//           <View
//             style={[
//               styles.progressBarFill,
//               {
//                 width: `${(progressRatio * 100).toFixed(
//                   0,
//                 )}%` as unknown as number,
//               },
//             ]}
//           />
//         </View>
//         <Text style={styles.participantsText}>
//           {currentParticipants}/{maxParticipants}
//         </Text>

//         {/* 참여 상태 버튼 (Optional) */}
//         {statusText ? (
//           <TouchableOpacity style={styles.participateButton}>
//             <Text style={styles.participateButtonText}>{statusText}</Text>
//           </TouchableOpacity>
//         ) : null}
//       </View>
//     </View>
//   );
// }

// // 메인 화면 (목록, 섹션 등)
// function HomeScreen() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <AppHeader />

//       {/* 전체 화면 세로 스크롤 */}
//       <ScrollView contentContainerStyle={{paddingVertical: 16}}>
//         {/* 섹션 제목 */}
//         <Text style={[styles.sectionTitle, {paddingHorizontal: 16}]}>
//           모집 중인 활동
//         </Text>

//         {/* 가로 스크롤로 카드 배치 */}
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           style={styles.horizontalCardScroll}>
//           <ActivityCard
//             title="Debate Club Meeting"
//             dateText="Today, 3:00 PM"
//             progressRatio={0.25}
//             maxParticipants={20}
//             currentParticipants={5}
//             statusText="Participating"
//             imageUrl="https://via.placeholder.com/400x200?text=Debate+Club+Image"
//           />
//           <ActivityCard
//             title="Music Club Practice"
//             dateText="Tomorrow, 5:00 PM"
//             progressRatio={0.1}
//             maxParticipants={10}
//             currentParticipants={1}
//             statusText=""
//             imageUrl="https://via.placeholder.com/400x200?text=Music+Club+Image"
//           />
//           {/* 필요하다면 추가 카드 배치 */}
//         </ScrollView>

//         {/* 지난 활동들 */}
//         <Text
//           style={[styles.sectionTitle, {marginTop: 24, paddingHorizontal: 16}]}>
//           지난 활동들
//         </Text>

//         {/* 가로 스크롤로 카드 배치 */}
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           style={styles.horizontalCardScroll}>
//           <ActivityCard
//             title="Debate Club Meeting"
//             dateText="Today, 3:00 PM"
//             progressRatio={1.0}
//             maxParticipants={20}
//             currentParticipants={20}
//             statusText="Participating"
//             imageUrl="https://via.placeholder.com/400x200?text=Debate+Club+Image"
//           />
//           <ActivityCard
//             title="Music Club Practice"
//             dateText="어제, 5:00 PM"
//             progressRatio={1.0}
//             maxParticipants={10}
//             currentParticipants={10}
//             imageUrl="https://via.placeholder.com/400x200?text=Music+Club+Image"
//           />
//           {/* 필요하다면 추가 카드 배치 */}
//         </ScrollView>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// // 최종 App 컴포넌트
// function App() {
//   return <HomeScreen />;
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

//   // 가로 스크롤 뷰 스타일
//   horizontalCardScroll: {
//     paddingHorizontal: 10,
//     marginBottom: 16,
//   },

//   // 카드 스타일
//   cardContainer: {
//     width: 280, // 가로 스크롤 시 카드 너비 지정
//     backgroundColor: '#fff',
//     marginRight: 16, // 카드 간격
//     borderRadius: 8,
//     overflow: 'hidden',
//     // 그림자 효과 (iOS 전용)
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     // 안드로이드용 그림자
//     elevation: 2,
//   },
//   cardImage: {
//     width: '100%',
//     height: 140,
//     resizeMode: 'cover',
//   },
//   cardContent: {
//     padding: 12,
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 4,
//   },
//   cardSubTitle: {
//     fontSize: 14,
//     color: '#888',
//     marginBottom: 8,
//   },
//   progressBarContainer: {
//     width: '100%',
//     height: 6,
//     backgroundColor: '#E0E0E0',
//     borderRadius: 3,
//     marginBottom: 4,
//   },
//   progressBarFill: {
//     height: '100%',
//     backgroundColor: '#3B82F6',
//     borderRadius: 3,
//   },
//   participantsText: {
//     fontSize: 12,
//     color: '#666',
//     marginBottom: 8,
//   },
//   participateButton: {
//     backgroundColor: '#3B82F6',
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 4,
//     alignSelf: 'flex-start',
//   },
//   participateButtonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },

//   // 섹션 타이틀 스타일
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 8,
//   },
// });

// export default App;

// App.tsx
import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen'; // 홈 화면

import ProfileScreen from './src/screens/ProfileScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import MemberScreen from './src/screens/MemberScreen';
import TopicScreen from './src/screens/TopicScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}} // 커스텀 헤더 쓰기 위해 기본 헤더 숨김
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Topic" component={TopicScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Member" component={MemberScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
