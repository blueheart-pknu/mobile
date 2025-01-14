import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Vibration,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import * as Keychain from 'react-native-keychain';
import {RootStackParamList} from './HomeScreen';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import BlueHeartIcon from '../assets/svg/blue-heart-icon.svg';

function LoginScreen() {
  const [username, setUsername] = useState('');
  const [studentNumber, setStudentNumber] = useState('');

  // 에러 메시지 상태
  const [usernameError, setUsernameError] = useState('');
  const [studentNumberError, setStudentNumberError] = useState('');

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleLogin = async () => {
    let hasError = false;

    // 에러 초기화
    setUsernameError('');
    setStudentNumberError('');

    // 유효성 검사
    const usernameRegex = /^[A-Za-z가-힣]+$/;
    if (!usernameRegex.test(username)) {
      setUsernameError('이름은 한글 또는 영어만 입력 가능합니다.');
      hasError = true;
    }

    const studentNumberRegex = /^[0-9]{1,15}$/;
    if (!studentNumberRegex.test(studentNumber)) {
      setStudentNumberError(
        '학번은 숫자만 입력 가능하며 15자 이하여야 합니다.',
      );
      hasError = true;
    }

    // 에러가 하나라도 있으면 진동 후 함수 종료
    if (hasError) {
      Vibration.vibrate(300); // 0.3초 진동
      return;
    }

    try {
      // Keychain에 사용자 정보 저장
      await Keychain.setGenericPassword('username', username);
      await Keychain.setGenericPassword('studentNumber', studentNumber);
      console.log('User information saved successfully:', {
        username,
        studentNumber,
      });

      // 성공 시 Home으로 이동 (Alert나 다른 UI는 필요에 따라 추가)
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error saving user information:', error);
      // 필요하다면 이 부분에서도 에러 메시지 처리
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.keyboardAvoidingView}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* 로고 또는 이미지 */}
        <BlueHeartIcon width={140} height={140} style={styles.logo} />

        {/* 이름 입력 */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>이름</Text>
          <TextInput
            style={[
              styles.input,
              usernameError ? styles.inputError : null, // 에러 시 빨간 테두리
            ]}
            placeholder="이름을 입력하세요"
            value={username}
            onChangeText={text => {
              setUsername(text);
              // 사용자가 변경할 때 즉시 에러 메시지 제거
              if (usernameError) setUsernameError('');
            }}
            autoCapitalize="none"
            returnKeyType="next"
            blurOnSubmit={false}
          />
          {/* 에러 메시지 표시 */}
          {usernameError ? (
            <Text style={styles.errorMessage}>{usernameError}</Text>
          ) : null}
        </View>

        {/* 학번 입력 */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>학번</Text>
          <TextInput
            style={[
              styles.input,
              studentNumberError ? styles.inputError : null, // 에러 시 빨간 테두리
            ]}
            placeholder="학번을 입력하세요"
            value={studentNumber}
            onChangeText={text => {
              setStudentNumber(text);
              if (studentNumberError) setStudentNumberError('');
            }}
            keyboardType="numeric"
            maxLength={15}
            returnKeyType="done"
            onSubmitEditing={handleLogin}
          />
          {/* 에러 메시지 표시 */}
          {studentNumberError ? (
            <Text style={styles.errorMessage}>{studentNumberError}</Text>
          ) : null}
        </View>

        {/* 로그인 버튼 */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>

        {/* 추가 정보 또는 링크 */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>계정이 없으신가요?</Text>
          <TouchableOpacity
            onPress={() => {
              /* 회원가입 로직 */
            }}>
            <Text style={styles.footerLink}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
    backgroundColor: '#fff',
    paddingBottom: 120,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    color: '#555',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#f7f7f7',
  },
  // 에러 발생 시 테두리 색상
  inputError: {
    borderColor: 'red',
  },
  // 에러 메시지 스타일
  errorMessage: {
    color: 'red',
    fontSize: 14,
    marginTop: 4,
  },
  button: {
    height: 50,
    backgroundColor: '#293593',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // 안드로이드 그림자
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
  footerLink: {
    fontSize: 14,
    color: '#293593',
    marginLeft: 4,
  },
});
