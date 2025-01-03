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
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Picker} from '@react-native-picker/picker';
import {Header} from '../components/Header';

export default function RegisterScreen() {
  const navigation = useNavigation();

  // 폼 상태
  const [activityName, setActivityName] = useState('Tennis Tournament');
  const [date, setDate] = useState(new Date('2024-06-15'));
  const [place, setPlace] = useState('32');
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
    // 실제로는 API 요청 등을 통해 서버로 전송
    console.log({
      activityName,
      date: date.toISOString().slice(0, 10),
      place,
      maxParticipants,
      status,
      description,
    });
    // 화면 뒤로 돌아가기 (또는 다른 화면으로 이동)
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 상단 헤더 (Back 버튼 + 제목) */}
      <Header />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}>
          <Text style={styles.backBtnText}>{'←'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Activity</Text>
      </View>

      {/* 폼 영역: KeyboardAvoidingView는 키보드가 올라올 때 화면이 가려지지 않도록 */}
      <KeyboardAvoidingView
        style={styles.formContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        {/* Activity Name */}
        <Text style={styles.label}>Activity Name</Text>
        <TextInput
          style={styles.input}
          value={activityName}
          onChangeText={setActivityName}
        />

        {/* Date */}
        <Text style={styles.label}>Date</Text>
        <TouchableOpacity
          style={[styles.input, {justifyContent: 'center'}]}
          onPress={() => setDatePickerVisible(true)}>
          <Text>{date.toISOString().slice(0, 10)}</Text>
        </TouchableOpacity>

        {/* DatePicker 모달 */}
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          date={date}
          onConfirm={handleConfirmDate}
          onCancel={() => setDatePickerVisible(false)}
        />

        {/* 장소 (Place) */}
        <Text style={styles.label}>장소</Text>
        <TextInput style={styles.input} value={place} onChangeText={setPlace} />

        {/* Maximum Participants (숫자만) */}
        <Text style={styles.label}>Maximum Participants</Text>
        <TextInput
          style={styles.input}
          value={maxParticipants}
          onChangeText={setMaxParticipants}
          keyboardType="numeric"
        />

        {/* Status (Picker) */}
        <Text style={styles.label}>Status</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={status}
            onValueChange={val => setStatus(val as typeof status)}>
            <Picker.Item label="Active" value="Active" />
            <Picker.Item label="Done" value="Done" />
            <Picker.Item label="Cancel" value="Cancel" />
          </Picker>
        </View>

        {/* Description (멀티라인) */}
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, {height: 80, textAlignVertical: 'top'}]}
          multiline
          value={description}
          onChangeText={setDescription}
        />

        {/* 하단 버튼들 */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#eee'}]}
            onPress={() => navigation.goBack()}>
            <Text style={[styles.buttonText, {color: '#000'}]}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
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

  // Picker
  pickerWrapper: {
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
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
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  saveButton: {
    flex: 0.48,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 6,
  },
});
