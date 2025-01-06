import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const dummyNotifications = [
  {
    id: 1,
    message: '누군가 당신의 게시글에 댓글을 달았습니다.',
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 10),
  },
  {
    id: 2,
    message: '새로운 이벤트가 시작되었습니다!',
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 60),
  },
  {
    id: 3,
    message: '메시지를 확인해주세요.',
    timestamp: new Date(new Date().getTime() - 1000 * 60 * 3),
  },
];

function getTimeAgoText(date: Date) {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const minutes = Math.floor(diff / 1000 / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days}일 전`;
  if (hours > 0) return `${hours}시간 전`;
  if (minutes > 0) return `${minutes}분 전`;
  return '방금 전';
}

type NotificationsDropdownProps = {
  style?: any;
  onClose?: () => void;
};

export function DropDown({style, onClose}: NotificationsDropdownProps) {
  const sortedNotifications = [...dummyNotifications].sort(
    (a, b) => b.timestamp.getTime() - a.timestamp.getTime(),
  );

  // hover 상태를 알림 ID별로 관리 (web 전용)
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <View style={[styles.container, style]}>
      {/* <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={{color: '#999'}}>닫기</Text>
      </TouchableOpacity> */}

      <ScrollView>
        {sortedNotifications.map(notification => {
          const isHovered = hoveredId === notification.id;

          return (
            <View
              key={notification.id}
              //   // onMouseEnter / onMouseLeave는 웹에서만 동작
              //   onMouseEnter={() => setHoveredId(notification.id)}
              //   onMouseLeave={() => setHoveredId(null)}
              style={[
                styles.notificationItem,
                isHovered && styles.notificationItemHover, // hover 시 스타일 적용
              ]}>
              <Text style={styles.messageText}>{notification.message}</Text>
              <Text style={styles.timeText}>
                {getTimeAgoText(notification.timestamp)}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 300,
    paddingVertical: 8,
    zIndex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD',
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
  // Hover 시 적용할 스타일
  notificationItemHover: {
    backgroundColor: '#f2f2f2',
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
