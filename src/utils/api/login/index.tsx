import axios from 'axios';
import { setToken } from 'utils/functions/token/tokenManager';
import { LoginType } from 'utils/interface/login';
import { tokenType } from 'utils/interface/token';

export const postLogin = async (loginData: LoginType) => {
  try {
    const { data } = await axios.post(
      'http://3.38.77.146:8080/user/token',
      loginData,
    );
    const { access_token, refresh_token }: tokenType = data;

    setToken(access_token, refresh_token);
  } catch (error) {
    throw error;
  }
};
