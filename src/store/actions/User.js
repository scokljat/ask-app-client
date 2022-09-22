import UserService from "../../api/services/User";
import {
  REGISTER,
  LOGIN,
  FETCH_USER,
  FETCH_POPULAR_USERS,
  UPDATE_USER,
  LOGOUT,
} from "../constants/ActionTypes";

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

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const getUserById = (id) => async (dispatch) => {
  try {
    const { data } = await UserService.getUserById(id);

    dispatch({ type: FETCH_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getPopularUsers = () => async (dispatch) => {
  try {
    const { data } = await UserService.getPopularUsers();

    dispatch({ type: FETCH_POPULAR_USERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (updatedUser) => async (dispatch) => {
  try {
    const { data } = await UserService.updateUser(updatedUser);

    dispatch({ type: UPDATE_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
