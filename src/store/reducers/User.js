import { REGISTER, LOGIN, FETCH_USER } from "../constants/ActionTypes";

const initialState = {
  user: {},
  isLoggedIn: localStorage.getItem("token") ? true : false,
};

export const reducerUser = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      localStorage.setItem("token", payload.accessToken);
      return { ...state, user: payload.user, isLoggedIn: true };
    case LOGIN:
      localStorage.setItem("token", payload.accessToken);
      return { ...state, user: payload.user, isLoggedIn: true };
    case FETCH_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
};
