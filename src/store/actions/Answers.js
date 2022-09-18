import AnswersService from "../../api/services/Answers";
import { FETCH_ANSWERS, ADD_ANSWER } from "../constants/ActionTypes";

export const getAnswers = (id) => async (dispatch) => {
  try {
    const { data } = await AnswersService.getAnswers(id);

    dispatch({ type: FETCH_ANSWERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createAnswer = (answer) => async (dispatch, getState) => {
  const user = getState().reducerUser.user;
  try {
    const { data } = await AnswersService.createAnswer(answer);

    dispatch({ type: ADD_ANSWER, payload: { data, user } });
  } catch (error) {
    console.log(error);
  }
};

export const likeAnswer = (likedAnswer) => async (dispatch) => {
  try {
    await AnswersService.likeAnswer(likedAnswer);

    dispatch(getAnswers(likedAnswer.questionId));
  } catch (error) {
    console.log(error);
  }
};
