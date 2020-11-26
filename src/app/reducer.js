import { userApi } from '../api/api';

const SET_IS_AUTHORIZED = 'SET_IS_AUTHORIZED';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_CLIENT_ID = 'SET_CLIENT_ID';
const SET_USER_DATA = 'SET_USER_DATA';
const LOGOUT = 'LOGOUT';

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

    case SET_IS_FETCHING:
      return { ...state, isFetching: action.payload };

    case SET_CLIENT_ID:
      return { ...state, clientId: action.payload };

    case SET_USER_DATA:
      return { ...state, userData: action.payload };

    case LOGOUT:
      return { ...state, userData: {}, clientId: null, isAuthorized: false };

    default:
      return state;
  }
};

const setIsAuthorized = (payload) => ({ payload, type: SET_IS_AUTHORIZED });
const setIsFetching = (payload) => ({ payload, type: SET_IS_FETCHING });
const setClientId = (payload) => ({ payload, type: SET_CLIENT_ID });
const setUserData = (payload) => ({ payload, type: SET_USER_DATA });
const logout = () => ({ type: LOGOUT });

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
    dispatch(setIsFetching(true));
    response = await userApi.signin(payload);
    dispatch(setIsFetching(false));

    if (response.status === 200) {
      const clientId = response.data['client_id'];
      const accessToken = response.data['access'];
      const refreshToken = response.data['refresh'];

      localStorage.setItem('clientId', clientId);
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      dispatch(setClientId(clientId));
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
    }
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = (dispatch) => {
  localStorage.clear();
  dispatch(logout());
};
