import axios from 'axios';
import { getCookie } from 'src/utils/cookieHandler';

export const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export const apiWithJWT = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

apiWithJWT.interceptors.request.use(
  config => {
    const token = getCookie('token');
    // console.log(token, getCookie('token'));
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    return error;
  }
);
