import { userApi } from '../api/api';

const SET_IS_AUTHORIZED = 'SET_IS_AUTHORIZED';

const initialState = {
  isAuthorized: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTHORIZED:
      return { ...state, isAuthorized: action.payload };
    default:
      return state;
  }
};

const setIsAuthorized = (payload) => ({ payload, type: SET_IS_AUTHORIZED });

export const registerNewUser = async (data) => {
  let response;
  try {
    response = await userApi.signup(data);
    debugger;
    if (response.status === 200) {
      alert("You've successfuly registered");
      return true;
    }
  } catch (error) {
    alert(error);
    return false;
  }
};

// export const loginUser = () => {
//   const clientId = response.data['client_id'];
//   const accessToken = response.data['access_token'];
//   const refreshToken = response.data['refresh_token'];

//   localStorage.setItem('clientId', clientId);
//   localStorage.setItem('accessToken', accessToken);
//   localStorage.setItem('refreshToken', refreshToken);

// };
