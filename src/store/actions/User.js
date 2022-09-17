import UserService from "../../api/services/User";
import { REGISTER, LOGIN } from "../constants/ActionTypes";

export const registerUser = (user) => async (dispatch) => {
  try {
    const { data } = await UserService.register(user);

    dispatch({ type: REGISTER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const login = (user) => async (dispatch) => {
  try {
    const { data } = await UserService.login(user);

    dispatch({ type: LOGIN, payload: data });
  } catch (error) {
    console.log(error);
  }
};
