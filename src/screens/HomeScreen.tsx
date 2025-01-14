// screens/HomeScreen.tsx
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import {ActivityCard} from '../components/ActivityCard';
import {axiosGetActivityByStatus, axiosGetAllActivity} from '../axios/axios';

export type RootStackParamList = {
  Home: undefined;
  // Topic: undefined;
  Topic: {id: number}; // id를 number 타입으로 받도록 설정
  Profile: undefined;
  Register: undefined;
  Member: undefined;
  Login: undefined;
};

export interface ActivatyProps {
  id: number;
  title: string;
  description: string; // 빠짐
  status: string;
  isSubscribed: boolean;
  currentNumber: number;
  maxNumber: number;
  expiredAt: string;
  imageUrl?: string;
  place: string;
}

function HomeScreen() {
  const [data, setData] = useState<ActivatyProps[] | null>(null);
  const [history, setHistory] = useState<ActivatyProps[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getActivitiesData = async () => {
    try {
      const response = await axiosGetAllActivity();
      const historyResponse = await axiosGetActivityByStatus();
      console.log('response', response);
      console.log('historyResponse', historyResponse);
      if (response?.data?.data) {
        setData(response.data.data as ActivatyProps[]);
      }
      if (historyResponse?.data?.data) {
        setHistory(historyResponse.data.data as ActivatyProps[]);
      }
    } catch (error) {
      console.error('Error fetching activities:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getActivitiesData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{paddingVertical: 16}}>
        <Text style={[styles.sectionTitle, {paddingHorizontal: 16}]}>
          모집 중인 활동
        </Text>

        {isLoading ? (
          <View style={{padding: 16, alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#333" />
            <Text>로딩 중...</Text>
          </View>
        ) : data ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalCardScroll}>
            {data.map(activity => (
              <ActivityCard
                key={activity.id}
                id={activity.id}
                title={activity.title}
                description={activity.description}
                status={activity.status}
                isSubscribed={activity.isSubscribed}
                currentNumber={activity.currentNumber}
                maxNumber={activity.maxNumber}
                expiredAt={activity.expiredAt}
                imageUrl={activity.imageUrl}
                place={activity.place}
              />
            ))}
          </ScrollView>
        ) : (
          <Text style={{padding: 16, textAlign: 'center'}}>
            활동 데이터가 없습니다.
          </Text>
        )}

        <Text
          style={[styles.sectionTitle, {marginTop: 24, paddingHorizontal: 16}]}>
          지난 활동들
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalCardScroll}>
          {history?.map(activity => (
            <ActivityCard
              key={activity.id}
              id={activity.id}
              title={activity.title}
              description={activity.description}
              status={activity.status}
              isSubscribed={activity.isSubscribed}
              currentNumber={activity.currentNumber}
              maxNumber={activity.maxNumber}
              expiredAt={activity.expiredAt}
              imageUrl={activity.imageUrl}
              place={activity.place}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  horizontalCardScroll: {
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
});
