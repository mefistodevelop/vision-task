import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://erp.apptrix.ru/api/clients/',
});

export const userApi = {
  signup(payload) {
    return instance.post('create/', payload).then((response) => response.data);
  },
  signin(payload) {
    return instance.post('token', payload).then((response) => response.data);
  },
  refreshToken(payload) {
    return instance
      .post('token/refresh/', payload)
      .then((response) => response.data);
  },
  getData(id) {
    return instance.get(id).then((response) => response.data);
  },
};
