import axios from 'axios';
import * as Keychain from 'react-native-keychain';

const BASE_URL = 'http://localhost:8080';

// Axios 인스턴스 생성
const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  //   timeout: 5000,s
});

// Interceptor로 헤더에 JWT 토큰 자동 추가
instance.interceptors.request.use(
  async config => {
    try {
      const credentials = await Keychain.getGenericPassword(); // Keychain에서 JWT 가져오기
      if (credentials) {
        config.headers.Authorization = `Bearer ${credentials.password}`;
        console.log('test', credentials.password);
      }
    } catch (error) {
      console.error('Error retrieving token:', error);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default instance;
