import UserService from "../../api/services/User";
import {
  REGISTER,
  LOGIN,
  FETCH_USER,
  FETCH_POPULAR_USERS,
  UPDATE_USER,
  LOGOUT,
} from "../constants/ActionTypes";
import { showToastMessage } from "../../components/toast/Toast";

export const registerUser = (user) => async (dispatch) => {
  try {
    const { data } = await UserService.register(user);

    showToastMessage("You are successfully registered", "success");
    dispatch({ type: REGISTER, payload: data });
  } catch (error) {
    showToastMessage(error.message, "error");
  }
};

export const login = (user) => async (dispatch) => {
  try {
    const { data } = await UserService.login(user);

    showToastMessage("You are successfully logged in", "success");
    dispatch({ type: LOGIN, payload: data });
  } catch (error) {
    showToastMessage(error.message, "error");
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  showToastMessage("You are successfully logged out", "success");
};

export const getUserById = (id) => async (dispatch) => {
  try {
    const { data } = await UserService.getUserById(id);

    dispatch({ type: FETCH_USER, payload: data });
  } catch (error) {
    showToastMessage(error.message, "error");
  }
};

export const getPopularUsers = () => async (dispatch) => {
  try {
    const { data } = await UserService.getPopularUsers();

    dispatch({ type: FETCH_POPULAR_USERS, payload: data });
  } catch (error) {
    showToastMessage(error.message, "error");
  }
};

export const updateUser = (updatedUser) => async (dispatch) => {
  try {
    const { data } = await UserService.updateUser(updatedUser);

    showToastMessage("User has been successfully edited", "success");
    dispatch({ type: UPDATE_USER, payload: data });
  } catch (error) {
    showToastMessage(error.message, "error");
  }
};
