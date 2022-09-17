import jwt_decode from "jwt-decode";
import { REGISTER, LOGIN } from "../constants/ActionTypes";

const initialState = {
  user: localStorage.getItem("token")
    ? jwt_decode(localStorage.getItem("token"))
    : {},
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
    default:
      return state;
  }
};
