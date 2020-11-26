import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://erp.apptrix.ru/api/clients/',
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const userApi = {
  signup(payload) {
    return instance.post('create/', payload);
  },
  signin(payload) {
    return instance.post('token/', payload);
  },
  refreshToken(payload) {
    return instance.post('token/refresh/', payload);
  },
  getData(id) {
    return instance.get(id);
  },
};

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status !== 401) {
      return new Promise((resolve, reject) => reject(error));
    }

    const refreshToken = localStorage.getItem('refreshToken');
    return userApi.refreshToken(refreshToken);
  }
);
