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

// import AppHeader from './AppHeader'; // (선택) 별도로 헤더를 떼서 써도 좋음

function TopicScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      {/* (선택) 같은 헤더를 재사용하거나, 
          이 화면 전용으로 구성한 헤더를 직접 작성해도 됩니다. */}
      {/* <AppHeader /> */}
      <Header />
      <View style={styles.headerPlaceholder}>
        <Text style={styles.headerText}>Emergency Relief</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Support Victims of Natural Disaster</Text>

        {/* 장소, 날짜 등 간단 표시 */}
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>장소</Text>
          <Text style={styles.infoLabel}>날짜</Text>
        </View>

        {/* 진행률 & 남은 기간 */}
        <View style={styles.progressSection}>
          <Text style={styles.percentText}>56%</Text>
          <View style={styles.periodRow}>
            <Text style={styles.period}>D-28</Text>
            <Text style={styles.period}>5/14</Text>
          </View>
          {/* 실제 ProgressBar */}
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBarFill, {width: '56%'}]} />
          </View>
        </View>

        {/* 본문 내용 */}
        <Text style={styles.description}>
          On December 29th at 9:15 AM, a devastating earthquake struck the
          coastal region...
        </Text>
      </ScrollView>

      {/* 하단 버튼 */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.donateButton}
          //   onPress={() => Alert('Donation Flow')}
          onPress={() => Alert.alert('Donation Flow')}>
          <Text style={styles.donateButtonText}>Donate Now</Text>
        </TouchableOpacity>
        <Text style={styles.secureText}>Secure payment processing</Text>
      </View>
    </SafeAreaView>
  );
}

export default TopicScreen;

const styles = StyleSheet.create({
  headerPlaceholder: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 14,
    color: '#888',
    fontWeight: '600',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  infoLabel: {
    fontSize: 14,
    color: '#555',
  },
  progressSection: {
    marginBottom: 16,
  },
  percentText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  periodRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  period: {
    fontSize: 14,
    color: '#666',
  },
  progressBarBackground: {
    width: '100%',
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginTop: 8,
  },
  progressBarFill: {
    height: 8,
    backgroundColor: '#222',
    borderRadius: 4,
  },
  description: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
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
