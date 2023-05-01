import axios from 'axios';
import { deleteCookie, getCookie } from 'src/utils/cookieHandler';

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
    console.error('token api request interceptor', error);
    return Promise.reject(error);
  }
);

apiWithJWT.interceptors.response.use(
  response => {
    console.log(response);
    return response;
  },
  error => {
    const { message } = error.response.data;
    console.error('token api response interceptor : ', message);
    if (message === 'Token Error') {
      deleteCookie('token');
      window.location.reload();
    }
    return Promise.reject(error);
  }
);
