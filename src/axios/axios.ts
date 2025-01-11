import axis from 'axios';

const instance = axis.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
});

const testURL = '/api/v1/user/create';
export const axiosTest = async (): Promise<any> => {
  try {
    const response = await instance.post(testURL, {
      username: '민영재',
      studentNumber: '202111741',
      role: 'USER',
    });
    return response;
  } catch (error) {
    throw error;
  }
};
