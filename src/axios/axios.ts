import instance from './axios.instance';

// const instance = axios.create({
//   baseURL: 'http://localhost:8080',
//   withCredentials: true,
// });

// const testURL = '/api/v1/user/create';
// export const axiosTest = async (): Promise<any> => {
//   try {
//     const response = await instance.post(testURL, {
//       username: '민영재',
//       studentNumber: '202111741',
//       role: 'USER',
//     });
//     return response;
//   } catch (error) {
//     throw error;
//   }
// };

// User -> 유저 관련 api
const axiosGetUserAllURL = '/api/v1/user/search/all';
export const axiosGetUserAll = async () => {
  try {
    const response = await instance.get(axiosGetUserAllURL);
    return response;
  } catch (error) {
    throw error;
  }
};

// HOME Screen
//TODO: activity/DONE 일단 테스트 해둠
const axiosGetActivityByStatusURL = '/api/v1/activity/DONE';
export const axiosGetActivityByStatus = async () => {
  try {
    const response = await instance.get(axiosGetActivityByStatusURL);
    console.log('response', response);
    return response;
  } catch (error) {
    throw error;
  }
};

// HOME Screen
const axiosGetAllActivityURL = '/api/v1/activity/PROGRESSING';
export const axiosGetAllActivity = async () => {
  try {
    const response = await instance.get(axiosGetAllActivityURL);
    return response;
  } catch (error) {
    throw error;
  }
};

const axiosGetActivityDetailURL = '/api/v1/activity/detail';
export const axiosGetActivityDetail = async (id: number) => {
  try {
    const response = await instance.get(`${axiosGetActivityDetailURL}/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

// HEADER Screen -> 알림 어떻게 해야함..? 소켓이 있나?
// const axios

// activity-history -> 활동 참여 기록
const axiosSubscribeActivityURL = '/api/v1/activity-history/subscribe';
export const axiosSubscribeActivity = async (
  activityId: number,
  userId: number,
) => {
  try {
    const response = await instance.post(`${axiosSubscribeActivityURL}`, {
      activityId,
      userId,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

// Group -> 그룹 관련 api
const axiosGetAllMemberURL = '/api/v1/group/all';
export const axiosGetAllMember = async () => {
  try {
    const response = await instance.get(axiosGetAllMemberURL);
    return response;
  } catch (error) {
    throw error;
  }
};

const axiosGetGroupMeURL = '/api/v1/group/me';
export const axiosGetGroupMe = async () => {
  try {
    const response = await instance.get(axiosGetGroupMeURL);
    return response;
  } catch (error) {
    throw error;
  }
};
