// screens/HomeScreen.tsx
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Header} from '../components/Header';
import {ActivityCard} from '../components/ActivityCard';
import {activityData} from '../constants/dummy';

// 화면 전체 너비
const {width} = Dimensions.get('window');

export type RootStackParamList = {
  Home: undefined;
  Topic: undefined;
  Profile: undefined;
  Register: undefined;
  Member: undefined;
  // 다른 화면들을 여기에 추가
};

// -------------------- 홈 화면 --------------------
function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      {/* 전체 화면 세로 스크롤 */}
      <ScrollView contentContainerStyle={{paddingVertical: 16}}>
        {/* 섹션 제목 */}
        <Text style={[styles.sectionTitle, {paddingHorizontal: 16}]}>
          모집 중인 활동
        </Text>

        {/* 가로 스크롤로 카드 배치 */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalCardScroll}>
          {activityData.map((activity, index) => (
            <ActivityCard
              key={index}
              title={activity.title}
              dateText={activity.dateText}
              progressRatio={activity.progressRatio}
              maxParticipants={activity.maxParticipants}
              currentParticipants={activity.currentParticipants}
              statusText={activity.statusText}
              imageUrl={activity.imageUrl}
              location={activity.location}
            />
          ))}
        </ScrollView>

        {/* 지난 활동들 */}
        <Text
          style={[styles.sectionTitle, {marginTop: 24, paddingHorizontal: 16}]}>
          지난 활동들
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalCardScroll}>
          {activityData.map((activity, index) => (
            <ActivityCard
              key={index}
              title={activity.title}
              dateText={activity.dateText}
              progressRatio={activity.progressRatio}
              maxParticipants={activity.maxParticipants}
              currentParticipants={activity.currentParticipants}
              statusText={activity.statusText}
              imageUrl={activity.imageUrl}
              location={activity.location}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;

// -------------------- 스타일 --------------------
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

  // 섹션 타이틀 스타일
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
});
