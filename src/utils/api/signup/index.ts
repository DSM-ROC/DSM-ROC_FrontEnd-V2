import axios from 'axios';
import { SignUpType } from 'utils/interface/signUp';

export const postSignUp = async (signData: SignUpType) => {
  try {
    await axios.post('http://3.38.77.146:8080/user', signData);
  } catch (error) {
    throw error;
  }
};
