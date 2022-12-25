import axios from 'axios';
import { LoginType } from 'utils/interface/login';

export const postLogin = async (loginData: LoginType) => {
  try {
    await axios.post('http://3.38.77.146:8080/user/token', loginData);
  } catch (error) {
    throw error;
  }
};
