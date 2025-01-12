// screens/TopicScreen.tsx
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ProgressBar} from '../components/ProgressBar';
import LocationIcon from '../assets/svg/location-icon.svg';
import DateIcon from '../assets/svg/calender-icon.svg';
import {RootStackParamList} from './HomeScreen';
import {axiosGetActivityDetail, axiosSubscribeActivity} from '../axios/axios';
import {ActivityStatus} from '../type/status';
import {formatDateDiff} from '../utils/data';

type TopicScreenRouteProp = RouteProp<RootStackParamList, 'Topic'>;

export interface ActivityDetailProps {
  id: number; // 활동 ID
  title: string; // 제목
  description: string; // 설명
  status: ActivityStatus;
  isSubscribed: boolean; // 사용자가 참여했는지 여부
  currentNumber: number; // 현재 참가자 수
  maxNumber: number | null; // 최대 참가자 수 (null일 수 있음)
  expiredAt: string; // 만료 시간 (ISO 형식의 문자열)
  place: string; // 장소명
  placeUrl: string; // 장소 URL
}

function TopicScreen() {
  const route = useRoute<TopicScreenRouteProp>();
  const {id} = route.params; // 받은 id 파라미터
  const [data, setData] = useState<ActivityDetailProps>();

  const getActivityDetail = async (id: number) => {
    try {
      const response = await axiosGetActivityDetail(id);
      console.log('response', response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  // 나중에 JWT 토큰으로 userId 받아오기
  const postActivitySubscribe = async (id: number) => {
    try {
      const response = await axiosSubscribeActivity(id, userId);
      console.log('response', response.data.data);
      Alert.alert('참여 완료!');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getActivityDetail(id);
  });

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      {/* <View style={styles.headerPlaceholder}></View> */}

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.headerText}>Staff name</Text>
        <Text style={styles.title}>{data?.title}</Text>

        {/* 장소, 날짜 등 간단 표시 */}
        <View style={styles.infoRow}>
          <LocationIcon width={20} height={20} style={styles.logo} />
          <Text style={styles.infoLabel}>{data?.place}</Text>
          <DateIcon width={18} height={18} style={styles.logo} />
          <Text style={styles.infoLabel}>
            {formatDateDiff(data?.expiredAt)}
          </Text>
        </View>

        <ProgressBar
          currentNumber={data?.currentNumber}
          maxNumber={data?.maxNumber}
        />

        {/* 본문 내용 */}
        <Text style={styles.description}>
          {data?.description || 'No description available'}
        </Text>
      </ScrollView>

      {/* 하단 버튼 */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.donateButton}
          // onPress={() => Alert.alert('Donation Flow')}
        >
          <Text style={styles.donateButtonText}>참여하기</Text>
        </TouchableOpacity>
        <Text style={styles.secureText}>오늘의 Staff는 Yeomin 입니다~!</Text>
      </View>
    </SafeAreaView>
  );
}

export default TopicScreen;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 14,
    color: '#888',
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 4,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    gap: 16,
    // justifyContent: 'space-between',
    marginBottom: 16,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    // marginRight: 8,
  },
  infoLabel: {
    fontSize: 14,
    color: '#555',
  },
  description: {
    // textAlign: '',
    fontSize: 16,
    color: '#444',
    lineHeight: 20,
    padding: 10,
  },
  bottomContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  donateButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 8,
  },
  donateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secureText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});
