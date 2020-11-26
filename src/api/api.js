import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://erp.apptrix.ru/api/clients/',
});

export const userApi = {
  signup(payload) {
    return instance.post('create/', payload);
  },
  signin(payload) {
    return instance.post('token', payload);
  },
  refreshToken(payload) {
    return instance.post('token/refresh/', payload);
  },
  getData(id) {
    return instance.get(id);
  },
};
