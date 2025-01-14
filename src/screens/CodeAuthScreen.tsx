import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Vibration,
} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import AuthCode from '../assets/svg/OTP.svg';

function CodeAuthScreen() {
  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState('');

  const navigation = useNavigation<NavigationProp<any>>();

  const handleCodeSubmit = () => {
    setCodeError('');
    if (code === '1234') {
      navigation.navigate('Login');
    } else {
      setCodeError('인증 코드가 잘못되었습니다.');
      Vibration.vibrate(300);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.keyboardAvoidingView}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* 중앙에 SVG 이미지 배치 */}
        <AuthCode style={styles.authSvg} width={200} height={200} />

        {/* 제목 */}

        {/* 인증 코드 입력 영역 */}
        <Text style={styles.title}>인증 코드 입력</Text>
        <Text style={styles.description}>받은 인증 코드를 입력해주세요</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, codeError ? styles.inputError : null]}
            placeholder="인증 코드를 입력하세요"
            value={code}
            onChangeText={text => {
              setCode(text);
              if (codeError) setCodeError('');
            }}
            keyboardType="numeric"
            returnKeyType="done"
            onSubmitEditing={handleCodeSubmit}
          />
          {codeError ? (
            <Text style={styles.errorMessage}>{codeError}</Text>
          ) : null}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleCodeSubmit}>
          <Text style={styles.buttonText}>인증하기</Text>
        </TouchableOpacity>
        {/* 인증하기 버튼 */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default CodeAuthScreen;

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center', // 스크롤 가능한 화면에서도 세로 방향으로 중앙 배치
    paddingHorizontal: 12,
    paddingVertical: 32,
    backgroundColor: '#fff',
    paddingBottom: 300,
  },
  authSvg: {
    alignSelf: 'center', // 가로 방향 중앙 정렬
    marginTop: 24,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 12,
    textAlign: 'center',
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
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
  inputError: {
    borderColor: 'red',
  },
  errorMessage: {
    marginTop: 4,
    fontSize: 14,
    color: 'red',
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
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});
