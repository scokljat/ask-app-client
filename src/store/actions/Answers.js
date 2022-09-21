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

export const dislikeAnswer = (dislikedAnswer) => async (dispatch) => {
  try {
    await AnswersService.dislikeAnswer(dislikedAnswer);

    dispatch(getAnswers(dislikedAnswer.questionId));
  } catch (error) {
    console.log(error);
  }
};

export const deleteAnswer = (answerId, questionId) => async (dispatch) => {
  try {
    await AnswersService.deleteAnswer(answerId);
    dispatch(getAnswers(questionId));
  } catch (error) {
    console.log(error);
  }
};

export const updateAnswer = (updatedAnswer) => async (dispatch) => {
  try {
    await AnswersService.updateAnswer(updatedAnswer);

    dispatch(getAnswers(updatedAnswer.questionId));
  } catch (error) {
    console.log(error);
  }
};
