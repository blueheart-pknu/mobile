// // RegisterScreen.tsx
// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import {Picker} from '@react-native-picker/picker';

// export default function RegisterScreen() {
//   const navigation = useNavigation();

//   // 폼 상태
//   const [activityName, setActivityName] = useState('Tennis Tournament');
//   const [date, setDate] = useState(new Date('2024-06-15'));
//   const [place, setPlace] = useState('32');
//   const [maxParticipants, setMaxParticipants] = useState('32'); // 문자열 상태로 관리
//   const [status, setStatus] = useState<'Active' | 'Done' | 'Cancel'>('Active');
//   const [description, setDescription] = useState(
//     'Annual tennis tournament for club members. Singles format with elimination rounds.',
//   );

//   // 날짜 선택 모달 열림/닫힘 상태
//   const [isDatePickerVisible, setDatePickerVisible] = useState(false);

//   // 날짜 선택 처리
//   const handleConfirmDate = (selectedDate: Date) => {
//     setDate(selectedDate);
//     setDatePickerVisible(false);
//   };

//   // “Save Changes” 처리
//   const handleSave = () => {
//     // 실제로는 API 요청 등을 통해 서버로 전송
//     console.log({
//       activityName,
//       date: date.toISOString().slice(0, 10),
//       place,
//       maxParticipants,
//       status,
//       description,
//     });
//     // 화면 뒤로 돌아가기 (또는 다른 화면으로 이동)
//     navigation.goBack();
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* 상단 헤더 (Back 버튼 + 제목) */}

//       <View style={styles.header}>
//         <TouchableOpacity
//           onPress={() => navigation.goBack()}
//           style={styles.backBtn}>
//           <Text style={styles.backBtnText}>{'←'}</Text>
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Edit Activity</Text>
//       </View>

//       {/* 폼 영역: KeyboardAvoidingView는 키보드가 올라올 때 화면이 가려지지 않도록 */}
//       <KeyboardAvoidingView
//         style={styles.formContainer}
//         behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
//         {/* Activity Name */}
//         <Text style={styles.label}>Activity Name</Text>
//         <TextInput
//           style={styles.input}
//           value={activityName}
//           onChangeText={setActivityName}
//         />

//         {/* Date */}
//         <Text style={styles.label}>Date</Text>
//         <TouchableOpacity
//           style={[styles.input, {justifyContent: 'center'}]}
//           onPress={() => setDatePickerVisible(true)}>
//           <Text>{date.toISOString().slice(0, 10)}</Text>
//         </TouchableOpacity>

//         {/* DatePicker 모달 */}
//         <DateTimePickerModal
//           isVisible={isDatePickerVisible}
//           mode="date"
//           date={date}
//           onConfirm={handleConfirmDate}
//           onCancel={() => setDatePickerVisible(false)}
//         />

//         {/* 장소 (Place) */}
//         <Text style={styles.label}>장소</Text>
//         <TextInput style={styles.input} value={place} onChangeText={setPlace} />

//         {/* Maximum Participants (숫자만) */}
//         <Text style={styles.label}>Maximum Participants</Text>
//         <TextInput
//           style={styles.input}
//           value={maxParticipants}
//           onChangeText={setMaxParticipants}
//           keyboardType="numeric"
//         />

//         {/* Status (Picker) */}
//         <Text style={styles.label}>Status</Text>
//         <View style={styles.pickerWrapper}>
//           <Picker
//             selectedValue={status}
//             onValueChange={val => setStatus(val as typeof status)}>
//             <Picker.Item label="Active" value="Active" />
//             <Picker.Item label="Done" value="Done" />
//             <Picker.Item label="Cancel" value="Cancel" />
//           </Picker>
//         </View>

//         {/* Description (멀티라인) */}
//         <Text style={styles.label}>Description</Text>
//         <TextInput
//           style={[styles.input, {height: 80, textAlignVertical: 'top'}]}
//           multiline
//           value={description}
//           onChangeText={setDescription}
//         />

//         {/* 하단 버튼들 */}
//         <View style={styles.buttonRow}>
//           <TouchableOpacity
//             style={[styles.button, {backgroundColor: '#eee'}]}
//             onPress={() => navigation.goBack()}>
//             <Text style={[styles.buttonText, {color: '#000'}]}>Cancel</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//             <Text style={styles.buttonText}>Save Changes</Text>
//           </TouchableOpacity>
//         </View>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// // -------------------- 스타일 --------------------
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   // 헤더
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     height: 56,
//     backgroundColor: '#fff',
//     paddingHorizontal: 16,
//     borderBottomColor: '#ddd',
//     borderBottomWidth: 1,
//   },
//   backBtn: {
//     paddingRight: 16,
//     paddingVertical: 8,
//   },
//   backBtnText: {
//     fontSize: 18,
//     color: '#333',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },

//   // 폼
//   formContainer: {
//     padding: 16,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: '600',
//     marginBottom: 4,
//     marginTop: 12,
//   },
//   input: {
//     backgroundColor: '#fff',
//     paddingHorizontal: 12,
//     paddingVertical: 10,
//     borderRadius: 6,
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },

//   // Picker
//   pickerWrapper: {
//     backgroundColor: '#fff',
//     borderRadius: 6,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     overflow: 'hidden',
//   },

//   // 버튼들
//   buttonRow: {
//     flexDirection: 'row',
//     marginTop: 24,
//     justifyContent: 'space-between',
//   },
//   button: {
//     flex: 0.48,
//     alignItems: 'center',
//     paddingVertical: 14,
//     borderRadius: 6,
//   },
//   buttonText: {
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   saveButton: {
//     flex: 0.48,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     paddingVertical: 14,
//     borderRadius: 6,
//   },
// });

// RegisterScreen.tsx
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import RNPickerSelect from 'react-native-picker-select';
// import Icon from 'react-native-vector-icons/MaterialIcons'; // 드롭다운 아이콘 추가
import PersonIcon from '../assets/svg/link-icon.svg';

export default function RegisterScreen() {
  const navigation = useNavigation();

  // 폼 상태
  const [activityName, setActivityName] = useState('Tennis Tournament');
  const [date, setDate] = useState(new Date('2024-06-15T10:30:00'));
  const [place, setPlace] = useState('Center Court');
  const [maxParticipants, setMaxParticipants] = useState('32'); // 문자열 상태로 관리
  const [status, setStatus] = useState<'Active' | 'Done' | 'Cancel'>('Active');
  const [description, setDescription] = useState(
    'Annual tennis tournament for club members. Singles format with elimination rounds.',
  );

  // 날짜 선택 모달 열림/닫힘 상태
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  // 날짜 선택 처리
  const handleConfirmDate = (selectedDate: Date) => {
    setDate(selectedDate);
    setDatePickerVisible(false);
  };

  // “Save Changes” 처리
  const handleSave = () => {
    // 참가자 수 유효성 검사
    const participantsNumber = Number(maxParticipants);
    if (isNaN(participantsNumber) || participantsNumber <= 0) {
      Alert.alert(
        '유효하지 않은 참가자 수',
        '참가자 수는 양의 정수여야 합니다.',
      );
      return;
    }

    // 실제로는 API 요청 등을 통해 서버로 전송
    console.log({
      activityName,
      date: date.toISOString(),
      place,
      maxParticipants: participantsNumber,
      status,
      description,
    });
    // 화면 뒤로 돌아가기 (또는 다른 화면으로 이동)
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 상단 헤더 (Back 버튼 + 제목) */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}>
          <Text style={styles.backBtnText}>{'←'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Activity</Text>
      </View>

      {/* 폼 영역: ScrollView과 KeyboardAvoidingView를 사용하여 키보드 문제 해결 */}
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={100}>
        <ScrollView
          contentContainerStyle={styles.formContainer}
          keyboardShouldPersistTaps="handled">
          {/* Activity Name */}
          <Text style={styles.label}>Activity Name</Text>
          <TextInput
            style={styles.input}
            value={activityName}
            onChangeText={setActivityName}
            placeholder="Enter activity name"
          />

          {/* Date & Time */}
          <Text style={styles.label}>Date & Time</Text>
          <TouchableOpacity
            style={[styles.input, styles.dateInput]}
            onPress={() => setDatePickerVisible(true)}>
            {/* 날짜와 시간 모두 표시 */}
            <Text>{date.toLocaleString()}</Text>
          </TouchableOpacity>

          {/* DatePicker 모달 */}
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime" // 날짜와 시간 선택
            date={date}
            onConfirm={handleConfirmDate}
            onCancel={() => setDatePickerVisible(false)}
          />

          {/* 장소 (Place) */}
          <Text style={styles.label}>Place</Text>
          <TextInput
            style={styles.input}
            value={place}
            onChangeText={setPlace}
            placeholder="Enter place"
          />

          {/* Maximum Participants (숫자만) */}
          <Text style={styles.label}>Maximum Participants</Text>
          <TextInput
            style={styles.input}
            value={maxParticipants}
            onChangeText={text => {
              // 숫자만 입력 가능하도록 필터링
              const numericText = text.replace(/[^0-9]/g, '');
              setMaxParticipants(numericText);
            }}
            keyboardType="numeric" // 숫자 키보드
            placeholder="Enter maximum participants"
          />

          {/* Status (드롭다운) */}
          <Text style={styles.label}>Status</Text>
          <View style={styles.pickerWrapper}>
            <RNPickerSelect
              onValueChange={(value: 'Active' | 'Done' | 'Cancel') =>
                setStatus(value)
              }
              items={[
                {label: 'Active', value: 'Active'},
                {label: 'Done', value: 'Done'},
                {label: 'Cancel', value: 'Cancel'},
              ]}
              // value={status}
              style={pickerSelectStyles}
              placeholder={{label: 'Select Status', value: null}}
              // useNativeAndroidPickerStyle={false}
              touchableWrapperProps={{
                style: {width: '100%'},
                activeOpacity: 0.7, // 클릭 시 투명도 조절 등
              }}
              Icon={() => <PersonIcon width={24} height={24} color="gray" />}
            />
          </View>

          {/* Description (멀티라인) */}
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.multilineInput]}
            multiline
            value={description}
            onChangeText={setDescription}
            placeholder="Enter description"
          />

          {/* 하단 버튼들 */}
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() => navigation.goBack()}>
              <Text style={[styles.buttonText, styles.cancelButtonText]}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.saveButton]}
              onPress={handleSave}>
              <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// -------------------- 스타일 --------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  // 헤더
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  backBtn: {
    paddingRight: 16,
    paddingVertical: 8,
  },
  backBtnText: {
    fontSize: 18,
    color: '#333',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  // 폼
  formContainer: {
    padding: 16,
    paddingBottom: 40, // 버튼을 위해 추가 패딩
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  dateInput: {
    justifyContent: 'center',
  },
  multilineInput: {
    height: 80,
    textAlignVertical: 'top',
  },

  // Picker
  pickerWrapper: {
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    paddingHorizontal: 12,
    height: 50,
    marginBottom: 16,
  },

  // 버튼들
  buttonRow: {
    flexDirection: 'row',
    marginTop: 24,
    justifyContent: 'space-between',
  },
  button: {
    flex: 0.48,
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 6,
  },
  cancelButton: {
    backgroundColor: '#eee',
  },
  cancelButtonText: {
    color: '#000',
  },
  saveButton: {
    backgroundColor: '#000',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

// Picker Select 스타일
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: '100%',
    height: 50,

    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: '#000',

    paddingRight: 30, // 드롭다운 화살표 공간 확보
    // 전체 박스 터치 가능하도록 flex 설정
    flex: 1,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: '#000',

    paddingRight: 30, // 드롭다운 화살표 공간 확보
    width: '100%',
    // 필요하다면 높이도 지정
    height: 50,
    flex: 1,
  },
});
