import axios from 'axios';
import { setToken } from 'utils/functions/token/tokenManager';
import { LoginType } from 'utils/interface/login';
import { tokenType } from 'utils/interface/token';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const postLogin = async (loginData: LoginType) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/user/token`, loginData);
    const { access_token, refresh_token }: tokenType = data;

    setToken(access_token, refresh_token);
  } catch (error) {
    throw error;
  }
};
