import axios from 'axios';
import { SignUpType } from 'utils/interface/signUp';
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const postSignUp = async (signData: SignUpType) => {
  try {
    await axios.post(`${BASE_URL}/user`, signData);
  } catch (error) {
    throw error;
  }
};
