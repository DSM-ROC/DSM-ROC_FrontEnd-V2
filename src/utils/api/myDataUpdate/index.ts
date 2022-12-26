import instance from 'utils/axios';

export const myDataUpdate = async (nickname: string) => {
  try {
    await instance.patch(`/user/mypage`, { nickname });
  } catch (error) {
    throw error;
  }
};
