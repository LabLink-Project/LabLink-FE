import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export const apiWithJWT = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

apiWithJWT.interceptors.request.use(
  config => {
    const token = document.cookie.split('=')[1];
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    return error;
  }
);
