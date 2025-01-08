// import {View} from 'react-native-reanimated/lib/typescript/Animated';
import {Member} from '../screens/ProfileScreen';
import DefaultIcon from '../assets/svg/default-icon.svg';
import {StyleSheet, Text, View} from 'react-native';
// import {Text} from 'react-native-svg';

// 멤버 목록 렌더
export const renderMemberItem = (member: Member) => {
  return (
    <View key={member.id} style={styles.memberContainer}>
      {/* <View style={styles.memberAvatar} /> */}
      <DefaultIcon width={50} height={50} style={styles.memberAvatar} />
      {/* <Image
          source={{uri: 'https://picsum.photos/200'}}
          style={styles.memberAvatar}
        /> */}

      <Text style={styles.memberName}>{member.name}</Text>
      {member.phone && <Text style={styles.memberPhone}>{member.phone}</Text>}
    </View>
  );
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
    // backgroundColor: '#666',
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
