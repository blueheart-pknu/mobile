import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Member} from '../screens/ProfileScreen';
import DefaultIcon from '../assets/svg/default-icon.svg';

// 멤버 목록 렌더
export const renderMemberItem = (
  member: Member,
  onPress?: (member: Member) => void,
) => {
  const content = (
    <>
      <DefaultIcon width={50} height={50} style={styles.memberAvatar} />
      <Text style={styles.memberName}>{member.name}</Text>
      {member.phone && <Text style={styles.memberPhone}>{member.phone}</Text>}
    </>
  );

  if (onPress) {
    return (
      <TouchableOpacity
        key={member.id}
        style={styles.memberContainer}
        onPress={() => onPress(member)}>
        {content}
      </TouchableOpacity>
    );
  } else {
    return (
      <View key={member.id} style={styles.memberContainer}>
        {content}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  memberContainer: {
    width: '25%', // 4열 그리드 예시
    alignItems: 'center',
    marginVertical: 8,
  },
  memberAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 6,
  },
  memberName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  memberPhone: {
    fontSize: 12,
    color: '#888',
  },
});
