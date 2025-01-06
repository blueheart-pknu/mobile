// screens/TopicScreen.tsx
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function ProgressBar({percentage}: {percentage: number}) {
  return (
    <>
      {/* 진행률 & 남은 기간 */}
      <View style={styles.progressSection}>
        <View style={styles.percentRow}>
          <Text style={styles.percentText}>{percentage}%</Text>
          <View style={styles.periodRow}>
            <Text style={styles.period}>D-28</Text>
            <Text style={styles.period}>5/14</Text>
          </View>
        </View>
        {/* 실제 ProgressBar */}
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, {width: `${percentage}%`}]} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  progressSection: {
    marginBottom: 16,
  },
  percentRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  percentText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  periodRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
    gap: 20,
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
});
