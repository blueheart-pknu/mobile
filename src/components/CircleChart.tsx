import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

export function CircleChart({percentage}: {percentage: number}) {
  return (
    <View style={styles.container}>
      <CircularProgress
        value={percentage}
        radius={20} // 원 크기
        maxValue={100}
        // title={`${percentage}%`}
        titleStyle={styles.percentageText}
        activeStrokeWidth={5}
        inActiveStrokeWidth={5}
        inActiveStrokeColor="#d3d3d3" // 회색 배경
        activeStrokeColor="#00bcd4" // 파란색
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  percentageText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
});
