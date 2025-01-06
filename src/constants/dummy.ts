// 화면에 표시할 더미 데이터
import BG_1 from '../assets/png/dummy-bg1.png';
import BG_2 from '../assets/png/dummy-bg2.png';
import BG_3 from '../assets/png/dummy-bg3.png';
import BG_4 from '../assets/png/dummy-bg4.png';
import BG_5 from '../assets/png/dummy-bg5.png';

export const activityData = [
  {
    title: 'Debate Club Meeting',
    dateText: 'Today, 3:00 PM',
    progressRatio: 0.25,
    maxParticipants: 20,
    currentParticipants: 5,
    statusText: 'Participating',
    imageUrl: BG_5,
    location: 'Room 101',
  },
  {
    title: 'Music Club Practice',
    dateText: 'Tomorrow, 5:00 PM',
    progressRatio: 0.1,
    maxParticipants: 10,
    currentParticipants: 1,
    statusText: '',
    imageUrl: BG_2,
    location: 'Room 102',
  },
  {
    title: 'Debate Club Meeting',
    dateText: 'Today, 3:00 PM',
    progressRatio: 1.0,
    maxParticipants: 20,
    currentParticipants: 20,
    statusText: 'Participating',
    imageUrl: BG_3,
    location: 'Room 103',
  },
  {
    title: 'Music Club Practice',
    dateText: '어제, 5:00 PM',
    progressRatio: 1.0,
    maxParticipants: 10,
    currentParticipants: 10,
    imageUrl: BG_4,
    location: 'Room 104',
  },
];
