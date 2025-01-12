import React, {useContext, useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import * as Keychain from 'react-native-keychain';
import {RootStackParamList} from './HomeScreen';
import {NavigationProp, useNavigation} from '@react-navigation/native';

function LoginScreen() {
  const [jwtToken, setJwtToken] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSaveToken = async () => {
    if (!jwtToken) {
      Alert.alert('오류', '토큰을 입력해주세요.');
      return;
    }

    try {
      // Keychain에 JWT 토큰 저장
      await Keychain.setGenericPassword('accessToken', jwtToken);

      console.log('Token saved successfully:', jwtToken);
      Alert.alert('성공', '테스트 토큰이 저장되었습니다.');
      navigation.navigate('Home'); // 홈 화면으로 이동
    } catch (error) {
      Alert.alert('오류', '토큰 저장 중 문제가 발생했습니다.');
      console.error('Error saving token:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>JWT 토큰 입력</Text>
      <TextInput
        style={styles.input}
        placeholder="테스트용 JWT 토큰 입력"
        value={jwtToken}
        onChangeText={setJwtToken}
        autoCapitalize="none"
        multiline
      />
      <Button title="JWT 토큰 저장 및 홈 이동" onPress={handleSaveToken} />
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  },
});
