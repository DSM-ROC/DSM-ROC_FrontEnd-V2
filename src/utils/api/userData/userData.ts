import instance from 'utils/axios';
import { userDataType } from 'utils/interface/user/user';

export const getUserData = async (): Promise<userDataType> => {
  try {
    const { data } = await instance.get(`/user`);
    return data;
  } catch (error) {
    throw error;
  }
};
