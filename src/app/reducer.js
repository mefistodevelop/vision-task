import { userApi } from '../api/api';

const SET_IS_AUTHORIZED = 'SET_IS_AUTHORIZED';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

const initialState = {
  isAuthorized: false,
  isFetching: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTHORIZED:
      return { ...state, isAuthorized: action.payload };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
};

const setIsAuthorized = (payload) => ({ payload, type: SET_IS_AUTHORIZED });
const setIsFetching = (payload) => ({ payload, type: SET_IS_FETCHING });

export const registerNewUser = async (data) => {
  let response;
  try {
    response = await userApi.signup(data);
    if (response.status === 201) {
      alert("You've successfuly registered");
      return true;
    }
  } catch (error) {
    alert(error);
    return false;
  }
};

export const loginUser = (payload) => async (dispatch) => {
  debugger;
  let response;
  try {
    dispatch(setIsFetching(true));
    response = await userApi.signin(payload);

    console.log(response);
    dispatch(setIsFetching(false));
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
