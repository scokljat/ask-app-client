import AnswersService from "../../api/services/Answers";
import { FETCH_ANSWERS } from "../constants/ActionTypes";

export const getAnswers = (id) => async (dispatch) => {
  try {
    const { data } = await AnswersService.getAnswers(id);

    dispatch({ type: FETCH_ANSWERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
