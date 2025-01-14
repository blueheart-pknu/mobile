// import React, {useState, useEffect} from 'react';
// import {Text, View} from 'react-native';

export const formatDateDiff = (dateString: string) => {
  const inputDate = new Date(dateString);
  const now = new Date();

  // 오늘 밤 11:59:59.999
  const todayEnd = new Date();
  todayEnd.setHours(23, 59, 59, 999);

  // 현재 날짜와 비교
  const diffTime = todayEnd.getTime() - now.getTime(); // 오늘 남은 시간
  const diffDays = Math.floor(
    (inputDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24),
  );

  if (diffDays === 0 && inputDate.getDate() === now.getDate()) {
    return 'TODAY';
  } else if (diffDays > 0) {
    return `${diffDays} day${diffDays > 1 ? 's' : ''} left`;
  } else {
    const hoursDiff = Math.floor(
      Math.abs(inputDate.getTime() - now.getTime()) / (1000 * 60 * 60),
    );
    return `Passed: ${hoursDiff} hour${hoursDiff > 1 ? 's' : ''} left`;
  }
};

// const DateDifferenceComponent = () => {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const inputDate = '2025-12-02T16:23:47.960583';
//     setMessage(formatDateDiff(inputDate));

//     const interval = setInterval(() => {
//       setMessage(formatDateDiff(inputDate));
//     }, 1000 * 60); // 1분마다 업데이트

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <View style={{padding: 20}}>
//       <Text style={{fontSize: 18, fontWeight: 'bold'}}>Date Status:</Text>
//       <Text style={{fontSize: 16}}>{message}</Text>
//     </View>
//   );
// };

// export default DateDifferenceComponent;
