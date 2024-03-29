import axios from 'axios';
import { toast } from 'react-toastify';

import { BASE_URL, TIMEOUT } from './config';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: any) => {
    if (response.status === 200 || response.status === 201) {
      if (response.data.code === 200) {
        return Promise.resolve(response.data);
      } else {
        return Promise.resolve(response);
      }
    } else {
      return Promise.reject(response);
    }
  },
  async (error: any) => {
    toast.error(error.response.data.message);
    return Promise.reject(error);
  }
);

export default instance;
