import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// 알림 예시 데이터
const dummyNotifications = [
  {
    id: 1,
    message: '누군가 당신의 게시글에 댓글을 달았습니다.',
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 10), // 10분 전
  },
  {
    id: 2,
    message: '새로운 이벤트가 시작되었습니다!',
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60), // 1시간 전
  },
  {
    id: 3,
    message: '메시지를 확인해주세요.',
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 3), // 3분 전
  },
];

// "얼마나 지났는지" 텍스트 계산 함수
function getTimeAgoText(date: Date) {
  const now = new Date();
  const diff = now.getTime() - date.getTime(); // ms 단위 차이

  const minutes = Math.floor(diff / 1000 / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days}일 전`;
  } else if (hours > 0) {
    return `${hours}시간 전`;
  } else if (minutes > 0) {
    return `${minutes}분 전`;
  } else {
    return '방금 전';
  }
}

type NotificationsDropdownProps = {
  style?: any;
  onClose?: () => void;
};

export function DropDown({style, onClose}: NotificationsDropdownProps) {
  // 최근순 정렬 (timestamp가 최신인 알림이 위로)
  const sortedNotifications = [...dummyNotifications].sort((a, b) => {
    return b.timestamp.getTime() - a.timestamp.getTime();
  });

  return (
    <View style={[styles.container, style]}>
      {/* 닫기 버튼이 필요하다면 넣기 */}
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={{color: '#999'}}>닫기</Text>
      </TouchableOpacity>

      <ScrollView>
        {sortedNotifications.map(notification => (
          <View key={notification.id} style={styles.notificationItem}>
            <Text style={styles.messageText}>{notification.message}</Text>
            <Text style={styles.timeText}>
              {getTimeAgoText(notification.timestamp)}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 300,
    paddingVertical: 8,
    zIndex: 1,
  },
  closeButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 12,
    paddingBottom: 4,
  },
  notificationItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomColor: '#EEE',
    borderBottomWidth: 1,
  },
  messageText: {
    fontSize: 14,
    marginBottom: 4,
  },
  timeText: {
    fontSize: 12,
    color: '#888',
  },
});
