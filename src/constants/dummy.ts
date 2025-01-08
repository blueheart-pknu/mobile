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

// 더미 Activity 데이터
export const ACTIVITIES_DATA = [
  {
    id: '1',
    title: 'Weekend Hiking',
    date: 'Sep 15, 2024',
    participants: 12,
    status: 'Active',
  },
  {
    id: '2',
    title: 'Beach Cleanup',
    date: 'Oct 03, 2024',
    participants: 8,
    status: 'Active',
  },
  {
    id: '3',
    title: 'Community Service',
    date: 'Nov 12, 2024',
    participants: 10,
    status: 'Active',
  },
  {
    id: '4',
    title: 'Charity Marathon',
    date: 'Dec 20, 2024',
    participants: 20,
    status: 'Active',
  },
  {
    id: '5',
    title: 'Christmas Party',
    date: 'Dec 25, 2024',
    participants: 15,
    status: 'Active',
  },
];

// 더미 멤버 목록
export const GROUP_MEMBERS = [
  {id: '1', name: 'test1', phone: '123456789'},
  {id: '2', name: 'test2'},
  {id: '3', name: 'test3'},
  {id: '4', name: 'test4'},
  {id: '5', name: 'test5'},
  {id: '6', name: 'test6'},
  {id: '7', name: 'test7'},
  {id: '8', name: 'test8'},
  {id: '9', name: 'test9'},
  {id: '10', name: 'test10'},
];
