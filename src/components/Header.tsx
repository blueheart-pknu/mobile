// screens/HomeScreen.tsx
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../screens/HomeScreen';

// -------------------- 헤더 --------------------
export function Header() {
  // 네비게이션 사용 (헤더에서 로고 클릭 시 Home으로 이동)
  //   const navigation = useNavigation();
  //   const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.headerContainer}>
      {/* 로고 부분 */}
      <View style={styles.headerLeft}>
        {/* 로고를 누르면 Home으로 이동하도록 */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={{
              uri: 'https://via.placeholder.com/40/007BFF/FFFFFF?text=Logo',
            }}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>BLUE HEART</Text>
      </View>

      {/* 오른쪽 아이콘들 (알림, 프로필 등) */}
      <View style={styles.headerRight}>
        <TouchableOpacity style={{marginRight: 16}}>
          <Image
            source={{
              uri: 'https://img.icons8.com/ios-filled/50/000000/appointment-reminders.png',
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={{uri: 'https://via.placeholder.com/40'}}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
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

  // 가로 스크롤 뷰 스타일
  horizontalCardScroll: {
    paddingHorizontal: 10,
    marginBottom: 16,
  },

  // 카드 스타일
  cardContainer: {
    width: 280,
    backgroundColor: '#fff',
    marginRight: 16,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 140,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardSubTitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  progressBarContainer: {
    width: '100%',
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    marginBottom: 4,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#3B82F6',
    borderRadius: 3,
  },
  participantsText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  participateButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  participateButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  // 섹션 타이틀 스타일
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
});
