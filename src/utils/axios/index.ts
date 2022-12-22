import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import {
  getToken,
  removeToken,
  setToken,
} from 'utils/functions/token/tokenManager';
import ToastError from 'utils/functions/errorMessage';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
});

instance.interceptors.request.use(
  async function (config) {
    const accessToken: string = await getToken().accessToken;

    if (accessToken) {
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
      };
    }

    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    const navigate = useNavigate();

    if (axios.isAxiosError(error) && error.response) {
      const { config, response } = error;
      if (response.data.status === 401 && getToken().refreshToken) {
        try {
          const res = await axios({
            method: 'patch',
            url: `${process.env.REACT_APP_BUBLIC_URL}/users/token`,
            headers: {
              'Refresh-Token': `Bearer ${getToken().refreshToken}`,
            },
          });

          const { access_token, refresh_token } = res.data;

          setToken(access_token, refresh_token);
          if (config && config.headers)
            config.headers.Authorization = `Bearer ${access_token}`;
          if (config) return axios(config);
        } catch (err: any) {
          if (
            err.response.data.status === 401 ||
            err.response.data.status === 404
          ) {
            ToastError('다시 로그인해주세요.');
            navigate('/login');
            removeToken();
          }
        }
      } else return Promise.reject(error);
    }
  },
);

export default instance;
