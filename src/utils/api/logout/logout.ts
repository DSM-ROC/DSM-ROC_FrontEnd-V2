import instance from 'utils/axios';

export const logout = async () => {
  try {
    await instance.delete(`/user/logout`);
  } catch (error) {
    throw error;
  }
};
