import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://erp.apptrix.ru/api/clients/',
});

export const userApi = {
  signup(payload) {
    return instance.post('create/', payload);
  },
  signin(payload) {
    return instance.post('token/', payload);
  },
  refreshToken(payload) {
    return instance.post('token/refresh/', payload).then((response) => {
      localStorage.setItem('accessToken', response.data.access);
    });
  },
  getData(id) {
    return instance.get(id);
  },
};

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

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      debugger;
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        return userApi.refreshToken({ refresh: refreshToken });
      } catch (err) {
        localStorage.clear();
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    }

    return new Promise((resolve, reject) => reject(error));
  }
);
