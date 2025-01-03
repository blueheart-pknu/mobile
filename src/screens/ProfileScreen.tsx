import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {Header} from '../components/Header';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from './HomeScreen';

const {width} = Dimensions.get('window');

// -------------------- 헤더 --------------------
// function AppHeader() {
//   return (
//     <View style={styles.headerContainer}>
//       <TouchableOpacity style={styles.logoArea} onPress={() => {}}>
//         <Text style={styles.logoText}>logo</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.refreshArea} onPress={() => {}}>
//         <Image
//           source={{
//             uri: 'https://img.icons8.com/ios-filled/50/000000/refresh--v1.png',
//           }}
//           style={styles.refreshIcon}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// }

// -------------------- 빠른 액션(Quick Actions) --------------------
function QuickActions() {
  return (
    <View style={styles.quickActionsContainer}>
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.quickActionsRow}>
        {/* View Members */}
        <TouchableOpacity style={styles.actionCard} onPress={() => {}}>
          <Image
            source={{
              uri: 'https://img.icons8.com/ios-filled/50/000000/conference-call.png',
            }}
            style={styles.actionIcon}
          />
          <Text style={styles.actionText}>View Members</Text>
        </TouchableOpacity>

        {/* Send Auth Links */}
        <TouchableOpacity style={styles.actionCard} onPress={() => {}}>
          <Image
            source={{
              uri: 'https://img.icons8.com/external-becris-lineal-becris/64/000000/external-link-mintab-for-ios-becris-lineal-becris.png',
            }}
            style={styles.actionIcon}
          />
          <Text style={styles.actionText}>Send Auth Links</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// -------------------- Activities --------------------
function Activities() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.activitiesContainer}>
      {/* 헤더 영역 */}
      <View style={styles.activitiesHeader}>
        <Text style={styles.sectionTitle}>Activities</Text>
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.createButtonText}>+ Create</Text>
        </TouchableOpacity>
      </View>

      {/* 예시 활동 카드 */}
      <View style={styles.activityCard}>
        {/* 제목/정보 */}
        <View style={{flex: 1}}>
          <Text style={styles.activityTitle}>Weekend Hiking</Text>
          <Text style={styles.activitySubText}>Sep 15, 2024</Text>
          <Text style={styles.activitySubText}>12 Participants</Text>
        </View>
        {/* 상태 표시 (Active) */}
        <View style={styles.activityStatusContainer}>
          <Text style={styles.activityStatus}>Active</Text>
        </View>
      </View>

      {/* 하단 버튼들(Edit / 인원수정) */}
      <View style={styles.activityButtonsRow}>
        <TouchableOpacity style={styles.activitySmallButton} onPress={() => {}}>
          <Text style={styles.smallButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.activitySmallButton}
          onPress={() => navigation.navigate('Member')}>
          <Text style={styles.smallButtonText}>인원수정</Text>
        </TouchableOpacity>
      </View>

      {/* 가로 슬라이드 페이지네이션(점 표시) */}
      <View style={styles.paginationDots}>
        {/* 첫 번째 점 (활성) */}
        <View style={[styles.dot, {backgroundColor: '#333'}]} />
        {/* 나머지 점 (비활성) */}
        <View style={[styles.dot, {backgroundColor: '#999'}]} />
        <View style={[styles.dot, {backgroundColor: '#999'}]} />
        <View style={[styles.dot, {backgroundColor: '#999'}]} />
        <View style={[styles.dot, {backgroundColor: '#999'}]} />
      </View>
    </View>
  );
}

// -------------------- Group --------------------
function GroupSection() {
  return (
    <View style={styles.groupContainer}>
      <View style={styles.groupHeader}>
        <Text style={styles.sectionTitle}>Group</Text>
        <TouchableOpacity style={styles.editButton} onPress={() => {}}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* 예시 그룹 멤버 목록 (3x3 등으로 구성) */}
      <View style={styles.groupGrid}>
        {/* 샘플로 10개 정도 */}
        <View style={[styles.memberCard, {backgroundColor: '#111'}]}>
          <Text style={styles.memberName}>hyowchoi</Text>
          <Text style={styles.memberPhone}>123456789</Text>
        </View>
        <View style={styles.memberCard}>
          <Text style={styles.memberName}>daewoole</Text>
        </View>
        <View style={styles.memberCard}>
          <Text style={styles.memberName}>dongglee</Text>
        </View>
        <View style={styles.memberCard}>
          <Text style={styles.memberName}>eunbikim</Text>
        </View>
        <View style={styles.memberCard}>
          <Text style={styles.memberName}>gykoh</Text>
        </View>
        <View style={styles.memberCard}>
          <Text style={styles.memberName}>hyungnoh</Text>
        </View>
        <View style={styles.memberCard}>
          <Text style={styles.memberName}>jinshin</Text>
        </View>
        <View style={styles.memberCard}>
          <Text style={styles.memberName}>jeekim</Text>
        </View>
        <View style={styles.memberCard}>
          <Text style={styles.memberName}>jihykim2</Text>
        </View>
        <View style={styles.memberCard}>
          <Text style={styles.memberName}>jimchoi</Text>
        </View>
      </View>
    </View>
  );
}

// -------------------- 메인 화면 --------------------
export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <AppHeader /> */}
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <QuickActions />
        <Activities />
        <GroupSection />
      </ScrollView>
    </SafeAreaView>
  );
}

// -------------------- 스타일 --------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 16,
  },
  // 헤더
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logoArea: {
    padding: 4,
  },
  logoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  refreshArea: {
    padding: 4,
  },
  refreshIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },

  // 섹션 공통
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  // Quick Actions
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

  // Activities
  activitiesContainer: {
    marginBottom: 24,
  },
  activitiesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  createButton: {
    backgroundColor: '#000',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  createButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  activityCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',

    // 그림자
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    elevation: 2,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  activitySubText: {
    fontSize: 14,
    color: '#666',
  },
  activityStatusContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#e5ffe0',
    borderRadius: 4,
    marginLeft: 8,
  },
  activityStatus: {
    fontSize: 14,
    color: 'green',
    fontWeight: 'bold',
  },
  activityButtonsRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  activitySmallButton: {
    backgroundColor: '#eee',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 8,
  },
  smallButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  paginationDots: {
    marginTop: 16,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },

  // Group
  groupContainer: {
    marginBottom: 24,
  },
  groupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  groupGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
  },
  memberCard: {
    width: (width - 48) / 3, // 한 줄에 3개
    height: 80,
    backgroundColor: '#222',
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  memberName: {
    color: '#fff',
    fontWeight: '600',
    marginBottom: 4,
  },
  memberPhone: {
    color: '#fff',
    fontSize: 12,
  },
  editButton: {
    backgroundColor: '#000',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
