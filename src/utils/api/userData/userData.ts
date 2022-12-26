import instance from 'utils/axios';
import { userDataType } from 'utils/interface/user/user';

export const getUserData = async (): Promise<userDataType> => {
  try {
    const { data } = await instance.get(`/user`);
    return data;
  } catch (error: any) {
    if (window.location.pathname !== '/login') {
      window.location.replace('/login');
    }
    throw error;
  }
};
