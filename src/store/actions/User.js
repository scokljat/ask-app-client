import UserService from "../../api/services/User";
import { REGISTER } from "../constants/ActionTypes";

export const registerUser = (user) => async (dispatch) => {
  try {
    const { data } = await UserService.register(user);

    dispatch({ type: REGISTER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
