import {
  REGISTER,
  LOGIN,
  FETCH_USER,
  FETCH_POPULAR_USERS,
  UPDATE_USER,
  LOGOUT,
} from "../constants/ActionTypes";

const initialState = {
  user: {},
  isLoggedIn: localStorage.getItem("token") ? true : false,
  popularUsers: [],
};

export const reducerUser = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      localStorage.setItem("token", payload.accessToken);
      return { ...state, user: payload.user, isLoggedIn: true };
    case LOGIN:
      console.log(payload);
      localStorage.setItem("token", payload.accessToken);
      return { ...state, user: payload.user, isLoggedIn: true };
    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, user: {}, isLoggedIn: false };
    case FETCH_USER:
      return { ...state, user: payload };
    case FETCH_POPULAR_USERS:
      return { ...state, popularUsers: payload.reverse() };
    case UPDATE_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};
