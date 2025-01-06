// screens/HomeScreen.tsx
import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {CircleChart} from '../components/CircleChart';
import {RootStackParamList} from '../screens/HomeScreen';
import BG_1 from '../assets/png/dummy-bg1.png';

export function ActivityCard({
  title,
  dateText,
  progressRatio,
  maxParticipants,
  currentParticipants,
  statusText,
  imageUrl,
  location,
}: {
  title: string;
  dateText: string;
  progressRatio: number; // 0~1 사이
  maxParticipants: number;
  currentParticipants: number;
  statusText?: string;
  imageUrl: undefined; // 타입 지정 뭐라고 하지?
  location: string;
}) {
  // 홈 화면에서 카드 클릭 시 이동 가능하도록
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.cardContainer}>
      {/* 상단 이미지 */}
      {/* <Image source={{uri: imageUrl}} style={styles.cardImage} /> */}
      {/* <Image source={BG_1} style={styles.cardImage} /> */}
      <Image source={imageUrl} style={styles.cardImage} />

      {/* 활동 정보 */}
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <View style={styles.subInfoContainer}>
          <View>
            <Text style={styles.cardSubTitle}>{dateText}</Text>
            <Text style={styles.cardSubTitle}>{location}</Text>
          </View>
          <CircleChart percentage={50} />
        </View>
        <>
          {/* 간단한 Progress Bar */}
          {/* ProfressBar components */}
          {/* <View style={styles.progressBarContainer}>
          <View
            style={[
              styles.progressBarFill,
              {
                width: `${(progressRatio * 100).toFixed(
                  0,
                )}%` as unknown as number,
              },
            ]}
          />
        </View>
        <Text style={styles.participantsText}>
          {currentParticipants}/{maxParticipants}
        </Text> */}
        </>
        {/* 참여 상태 버튼 (Optional) -> 누르면 상세 화면으로 이동 */}
        {statusText ? (
          <TouchableOpacity
            style={styles.participateButton}
            onPress={() => navigation.navigate('Topic')}>
            <Text style={styles.participateButtonText}>{statusText}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.participateButtonDisabled}
            // onPress={() => navigation.navigate('Topic')}
          >
            <Text style={styles.participateButtonText}>Closed</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

// -------------------- 스타일 --------------------
const styles = StyleSheet.create({
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
    width: '100%',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardSubTitle: {
    fontSize: 14,
    color: '#888',
    // marginBottom: 8,
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
    backgroundColor: '#293593',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-start',
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  participateButtonDisabled: {
    backgroundColor: '#B2B2B2',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-start',
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  participateButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  subTitleContainer: {},
  subInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 360,
    marginBottom: 8,
  },
});
