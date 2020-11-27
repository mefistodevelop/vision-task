import { userApi } from '../api/api';

const SET_IS_AUTHORIZED = 'SET_IS_AUTHORIZED';
const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  isAuthorized: false,
  isFetching: false,
  clientId: null,
  userData: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTHORIZED:
      return { ...state, isAuthorized: action.payload };

    case SET_USER_DATA:
      return { ...state, userData: action.payload };

    default:
      return state;
  }
};

const setIsAuthorized = (payload) => ({ payload, type: SET_IS_AUTHORIZED });
const setUserData = (payload) => ({ payload, type: SET_USER_DATA });

export const registerNewUser = async (data) => {
  let response;
  try {
    response = await userApi.signup(data);
    if (response.status === 201) {
      alert("You've successfully registered");
      return true;
    }
  } catch (error) {
    alert(error);
    return false;
  }
};

export const loginUser = (payload) => async (dispatch) => {
  let response;
  try {
    response = await userApi.signin(payload);

    if (response.status === 200) {
      const clientId = response.data['client_id'];
      const accessToken = response.data['access'];
      const refreshToken = response.data['refresh'];

      localStorage.setItem('clientId', clientId);
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      dispatch(setIsAuthorized(true));
    }
  } catch (error) {
    alert(error);
  }
};

export const getUserData = (id) => async (dispatch) => {
  let response;
  try {
    response = await userApi.getData(id);
    if (response.status === 200) {
      dispatch(setUserData(response.data));
      dispatch(setIsAuthorized(true));
    }
  } catch (error) {
    console.error(error);
  }
};
