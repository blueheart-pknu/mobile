// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Image,
//   Dimensions,
// } from 'react-native';
// import {Header} from '../components/Header';
// import {NavigationProp, useNavigation} from '@react-navigation/native';
// import {RootStackParamList} from './HomeScreen';

// const {width} = Dimensions.get('window');

// // -------------------- 빠른 액션(Quick Actions) --------------------
// function QuickActions() {
//   return (
//     <View style={styles.quickActionsContainer}>
//       <Text style={styles.sectionTitle}>Quick Actions</Text>
//       <View style={styles.quickActionsRow}>
//         {/* View Members */}
//         <TouchableOpacity style={styles.actionCard} onPress={() => {}}>
//           <Image
//             source={{
//               uri: 'https://img.icons8.com/ios-filled/50/000000/conference-call.png',
//             }}
//             style={styles.actionIcon}
//           />
//           <Text style={styles.actionText}>View Members</Text>
//         </TouchableOpacity>

//         {/* Send Auth Links */}
//         <TouchableOpacity style={styles.actionCard} onPress={() => {}}>
//           <Image
//             source={{
//               uri: 'https://img.icons8.com/external-becris-lineal-becris/64/000000/external-link-mintab-for-ios-becris-lineal-becris.png',
//             }}
//             style={styles.actionIcon}
//           />
//           <Text style={styles.actionText}>Send Auth Links</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// // -------------------- Activities --------------------
// function Activities() {
//   const navigation = useNavigation<NavigationProp<RootStackParamList>>();
//   return (
//     <View style={styles.activitiesContainer}>
//       {/* 헤더 영역 */}
//       <View style={styles.activitiesHeader}>
//         <Text style={styles.sectionTitle}>Activities</Text>
//         <TouchableOpacity
//           style={styles.createButton}
//           onPress={() => navigation.navigate('Register')}>
//           <Text style={styles.createButtonText}>+ Create</Text>
//         </TouchableOpacity>
//       </View>

//       {/* 예시 활동 카드 */}
//       <View style={styles.activityCard}>
//         {/* 제목/정보 */}
//         <View style={{flex: 1}}>
//           <Text style={styles.activityTitle}>Weekend Hiking</Text>
//           <Text style={styles.activitySubText}>Sep 15, 2024</Text>
//           <Text style={styles.activitySubText}>12 Participants</Text>
//         </View>
//         {/* 상태 표시 (Active) */}
//         <View style={styles.activityStatusContainer}>
//           <Text style={styles.activityStatus}>Active</Text>
//         </View>
//       </View>

//       {/* 하단 버튼들(Edit / 인원수정) */}
//       <View style={styles.activityButtonsRow}>
//         <TouchableOpacity style={styles.activitySmallButton} onPress={() => {}}>
//           <Text style={styles.smallButtonText}>Edit</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.activitySmallButton}
//           onPress={() => navigation.navigate('Member')}>
//           <Text style={styles.smallButtonText}>인원수정</Text>
//         </TouchableOpacity>
//       </View>

//       {/* 가로 슬라이드 페이지네이션(점 표시) */}
//       <View style={styles.paginationDots}>
//         {/* 첫 번째 점 (활성) */}
//         <View style={[styles.dot, {backgroundColor: '#333'}]} />
//         {/* 나머지 점 (비활성) */}
//         <View style={[styles.dot, {backgroundColor: '#999'}]} />
//         <View style={[styles.dot, {backgroundColor: '#999'}]} />
//         <View style={[styles.dot, {backgroundColor: '#999'}]} />
//         <View style={[styles.dot, {backgroundColor: '#999'}]} />
//       </View>
//     </View>
//   );
// }

// // -------------------- Group --------------------
// function GroupSection() {
//   return (
//     <View style={styles.groupContainer}>
//       <View style={styles.groupHeader}>
//         <Text style={styles.sectionTitle}>Group</Text>
//         <TouchableOpacity style={styles.editButton} onPress={() => {}}>
//           <Text style={styles.editButtonText}>Edit</Text>
//         </TouchableOpacity>
//       </View>

//       {/* 예시 그룹 멤버 목록 (3x3 등으로 구성) */}
//       <View style={styles.groupGrid}>
//         {/* 샘플로 10개 정도 */}
//         <View style={[styles.memberCard, {backgroundColor: '#111'}]}>
//           <Text style={styles.memberName}>hyowchoi</Text>
//           <Text style={styles.memberPhone}>123456789</Text>
//         </View>
//         <View style={styles.memberCard}>
//           <Text style={styles.memberName}>daewoole</Text>
//         </View>
//         <View style={styles.memberCard}>
//           <Text style={styles.memberName}>dongglee</Text>
//         </View>
//         <View style={styles.memberCard}>
//           <Text style={styles.memberName}>eunbikim</Text>
//         </View>
//         <View style={styles.memberCard}>
//           <Text style={styles.memberName}>gykoh</Text>
//         </View>
//         <View style={styles.memberCard}>
//           <Text style={styles.memberName}>hyungnoh</Text>
//         </View>
//         <View style={styles.memberCard}>
//           <Text style={styles.memberName}>jinshin</Text>
//         </View>
//         <View style={styles.memberCard}>
//           <Text style={styles.memberName}>jeekim</Text>
//         </View>
//         <View style={styles.memberCard}>
//           <Text style={styles.memberName}>jihykim2</Text>
//         </View>
//         <View style={styles.memberCard}>
//           <Text style={styles.memberName}>jimchoi</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// // -------------------- 메인 화면 --------------------
// export default function ProfileScreen() {
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* <AppHeader /> */}
//       <Header />
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <QuickActions />
//         <Activities />
//         <GroupSection />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// // -------------------- 스타일 --------------------
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   scrollContainer: {
//     padding: 16,
//   }
//   // 헤더
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     height: 56,
//     paddingHorizontal: 16,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   logoArea: {
//     padding: 4,
//   },
//   logoText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   refreshArea: {
//     padding: 4,
//   },
//   refreshIcon: {
//     width: 24,
//     height: 24,
//     resizeMode: 'contain',
//   },

//   // 섹션 공통
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },

//   // Quick Actions
//   quickActionsContainer: {
//     marginBottom: 24,
//   },
//   quickActionsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   actionCard: {
//     flex: 1,
//     marginRight: 8,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     paddingVertical: 20,
//     alignItems: 'center',
//     justifyContent: 'center',

//     // 그림자
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.1,
//     elevation: 2,
//   },
//   actionIcon: {
//     width: 32,
//     height: 32,
//     marginBottom: 8,
//     tintColor: '#000',
//   },
//   actionText: {
//     fontSize: 14,
//     fontWeight: '500',
//   },

//   // Activities
//   activitiesContainer: {
//     marginBottom: 24,
//   },
//   activitiesHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   createButton: {
//     backgroundColor: '#000',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 4,
//   },
//   createButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   activityCard: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     marginTop: 12,
//     padding: 16,
//     flexDirection: 'row',
//     alignItems: 'center',

//     // 그림자
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.1,
//     elevation: 2,
//   },
//   activityTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 4,
//   },
//   activitySubText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   activityStatusContainer: {
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     backgroundColor: '#e5ffe0',
//     borderRadius: 4,
//     marginLeft: 8,
//   },
//   activityStatus: {
//     fontSize: 14,
//     color: 'green',
//     fontWeight: 'bold',
//   },
//   activityButtonsRow: {
//     flexDirection: 'row',
//     marginTop: 8,
//   },
//   activitySmallButton: {
//     backgroundColor: '#eee',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 4,
//     marginRight: 8,
//   },
//   smallButtonText: {
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   paginationDots: {
//     marginTop: 16,
//     flexDirection: 'row',
//     alignSelf: 'center',
//   },
//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     marginHorizontal: 3,
//   },

//   // Group
//   groupContainer: {
//     marginBottom: 24,
//   },
//   groupHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   groupGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginTop: 12,
//   },
//   memberCard: {
//     width: (width - 48) / 3, // 한 줄에 3개
//     height: 80,
//     backgroundColor: '#222',
//     borderRadius: 8,
//     marginRight: 8,
//     marginBottom: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   memberName: {
//     color: '#fff',
//     fontWeight: '600',
//     marginBottom: 4,
//   },
//   memberPhone: {
//     color: '#fff',
//     fontSize: 12,
//   },
//   editButton: {
//     backgroundColor: '#000',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 4,
//   },
//   editButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

import React, {act, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {Header} from '../components/Header';
import {ACTIVITIES_DATA, GROUP_MEMBERS} from '../constants/dummy';
import DateIcon from '../assets/svg/calender-icon.svg';
import PeopleIcon from '../assets/svg/people-icon.svg';
import LinkIcon from '../assets/svg/link-icon.svg';
import PeoplesIcon from '../assets/svg/peoples-icon.svg';

function QuickActions() {
  return (
    <View style={styles.quickActionsContainer}>
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.quickActionsRow}>
        {/* View Members */}
        <TouchableOpacity style={styles.actionCard} onPress={() => {}}>
          <PeoplesIcon width={40} height={45} />
          <Text style={styles.actionText}>View Members</Text>
        </TouchableOpacity>

        {/* Send Auth Links */}
        <TouchableOpacity style={styles.actionCard} onPress={() => {}}>
          <LinkIcon width={40} height={45} />

          <Text style={styles.actionText}>Send Auth Links</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// 기기 너비(페이지 단위 스크롤을 위해 사용)
const {width} = Dimensions.get('window');

const ProfileScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  // 스크롤 시 현재 페이지 index 업데이트
  const onScroll = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setCurrentIndex(index);
  };

  // 개별 Activity card
  const renderActivityItem = ({item}) => {
    return (
      <View style={styles.activityCardContainer}>
        <View style={styles.activityCard}>
          <View style={styles.activityTitleContainer}>
            <Text style={styles.activityTitle}>{item.title}</Text>
            <Text style={styles.activityStatus}>{item.status}</Text>
          </View>
          <View style={styles.activityInfoRow}>
            <DateIcon width={16} height={16} />
            <Text style={styles.activityLabel}> {item.date}</Text>
          </View>
          <View style={styles.activityInfoRow}>
            <PeopleIcon width={16} height={16} />
            <Text style={styles.activityLabel}>
              {item.participants} Participants
            </Text>
          </View>
          <View style={styles.activityButtonsRow}>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.koreanButton}>
              <Text style={styles.koreanButtonText}>인원수정</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  // 멤버 목록 렌더
  const renderMemberItem = member => {
    return (
      <View key={member.id} style={styles.memberContainer}>
        <View style={styles.memberAvatar} />
        <Text style={styles.memberName}>{member.name}</Text>
        {member.phone && <Text style={styles.memberPhone}>{member.phone}</Text>}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <QuickActions />

      {/* Activities Title + Create 버튼 */}
      <View style={styles.activitiesTitleContainer}>
        <Text style={styles.sectionTitle}>Activities</Text>
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>+ Create</Text>
        </TouchableOpacity>
      </View>

      {/* 가로 스크롤(페이지 단위)로 Activity들 표시 */}
      <View style={{height: 200}}>
        <FlatList
          // ref={flatListRef}
          data={ACTIVITIES_DATA}
          keyExtractor={item => item.id}
          renderItem={renderActivityItem}
          horizontal
          pagingEnabled
          onScroll={onScroll}
          showsHorizontalScrollIndicator={false}
          // contentContainerStyle={{paddingHorizontal: 16}}
        />
      </View>

      {/* 아래쪽 페이지네이션 dot */}
      <View style={styles.pagination}>
        {ACTIVITIES_DATA.map((_, index) => {
          return (
            <View
              key={index}
              style={[
                styles.dot,
                {backgroundColor: index === currentIndex ? '#333' : '#ccc'},
              ]}
            />
          );
        })}
      </View>

      {/* Group(멤버 목록) 영역 */}
      <View style={styles.groupContainer}>
        <View style={styles.groupHeader}>
          <Text style={styles.sectionTitle}>Group</Text>
          <TouchableOpacity style={styles.editButtonBlack}>
            <Text style={styles.editButtonBlackText}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* 그리드 형태로 멤버 표시 (flexWrap 사용) */}
        <View style={styles.membersGrid}>
          {GROUP_MEMBERS.map(member => renderMemberItem(member))}
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    paddingTop: 40,
    marginHorizontal: 16,
    // paddingHorizontal: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fakeLogo: {
    width: 40,
    height: 40,
    backgroundColor: 'lightblue',
    borderRadius: 20,
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  quickActionButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  quickActionText: {
    fontSize: 14,
    fontWeight: '500',
  },
  activitiesTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginHorizontal: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  createButton: {
    backgroundColor: '#000',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  activityCardContainer: {
    // width, // 페이지 단위로 딱 맞게
    width: width - 32, // 16px 패딩 * 2
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    // marginHorizontal
  },
  activityCard: {
    width: width * 0.9,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  activityStatus: {
    alignSelf: 'flex-start',
    backgroundColor: '#C8FACC', // 예시: Active에 대응되는 연한 초록색
    color: '#1B5E20',
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
  },
  activityInfoRow: {
    flexDirection: 'row',
    marginBottom: 4,
    gap: 4,
  },
  activityLabel: {
    fontSize: 14,
    color: '#333',
  },
  activityButtonsRow: {
    flexDirection: 'row',
    marginTop: 12,
  },
  editButton: {
    // backgroundColor: '#ddd',
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  editButtonText: {
    color: '#333',
    fontSize: 14,
  },
  koreanButton: {
    // backgroundColor: '#98CFFF',
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  koreanButtonText: {
    color: '#000',
    fontSize: 14,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  groupContainer: {
    flex: 1,
    // paddingHorizontal: 16,
    marginBottom: 16,
  },
  groupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  editButtonBlack: {
    backgroundColor: '#000',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButtonBlackText: {
    color: '#fff',
    fontSize: 14,
  },
  membersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  memberContainer: {
    width: '25%', // 4열 그리드 예시
    alignItems: 'center',
    marginVertical: 8,
  },
  memberAvatar: {
    width: 50,
    height: 50,
    backgroundColor: '#666',
    borderRadius: 25,
    marginBottom: 4,
  },
  memberName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  memberPhone: {
    fontSize: 12,
    color: '#888',
  },

  //   // Quick Actions
  quickActionsContainer: {
    marginBottom: 24,
  },
  quickActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionCard: {
    flex: 1,
    marginRight: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',

    // 그림자
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    elevation: 2,
  },
  actionIcon: {
    width: 32,
    height: 32,
    marginBottom: 8,
    tintColor: '#000',
  },
  actionText: {
    fontSize: 14,
    fontWeight: '500',
  },
});
