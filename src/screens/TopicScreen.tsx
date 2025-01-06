// screens/TopicScreen.tsx
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../components/Header';
import {ProgressBar} from '../components/ProgressBar';
import LocationIcon from '../assets/svg/location-icon.svg';
import DateIcon from '../assets/svg/Calender-icon.svg';

function TopicScreen() {
  const navigation = useNavigation();
  const [percentage, setPercentage] = React.useState(87);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      {/* <View style={styles.headerPlaceholder}></View> */}

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.headerText}>Staff name</Text>
        <Text style={styles.title}>Support Victims of Natural Disaster</Text>

        {/* 장소, 날짜 등 간단 표시 */}
        <View style={styles.infoRow}>
          <LocationIcon width={20} height={20} style={styles.logo} />
          <Text style={styles.infoLabel}>장소</Text>
          <DateIcon width={18} height={18} style={styles.logo} />
          <Text style={styles.infoLabel}>날짜</Text>
        </View>

        <ProgressBar percentage={percentage} />

        {/* 본문 내용 */}
        <Text style={styles.description}>
          Once upon a time, in a quiet little town, there was a small bakery
          famous for its delicious apple pies. Every morning, the aroma of
          freshly baked goods filled the air, drawing people from all around.
          The baker, Mr. Thomas, was known not only for his skills but also for
        </Text>
      </ScrollView>

      {/* 하단 버튼 */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.donateButton}
          onPress={() => Alert.alert('Donation Flow')}>
          <Text style={styles.donateButtonText}>Donate Now</Text>
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
