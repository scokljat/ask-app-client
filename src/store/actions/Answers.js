import AnswersService from "../../api/services/Answers";
import { FETCH_ANSWERS, ADD_ANSWER } from "../constants/ActionTypes";
import { showToastMessage } from "../../components/toast/Toast";

export const getAnswers = (id) => async (dispatch) => {
  try {
    const { data } = await AnswersService.getAnswers(id);

    dispatch({ type: FETCH_ANSWERS, payload: data });
  } catch (error) {
    showToastMessage(error.message, "error");
  }
};

export const createAnswer = (answer) => async (dispatch, getState) => {
  const user = getState().reducerUser.user;
  try {
    const { data } = await AnswersService.createAnswer(answer);

    showToastMessage("Answer has been successfully created", "success");
    dispatch({ type: ADD_ANSWER, payload: { data, user } });
  } catch (error) {
    showToastMessage(error.message, "error");
  }
};

export const likeAnswer = (likedAnswer) => async (dispatch) => {
  try {
    await AnswersService.likeAnswer(likedAnswer);

    dispatch(getAnswers(likedAnswer.questionId));
    showToastMessage("You have successfully liked the answer", "success");
  } catch (error) {
    showToastMessage(error.message, "error");
  }
};

export const dislikeAnswer = (dislikedAnswer) => async (dispatch) => {
  try {
    await AnswersService.dislikeAnswer(dislikedAnswer);

    dispatch(getAnswers(dislikedAnswer.questionId));
    showToastMessage("You have successfully disliked the answer", "success");
  } catch (error) {
    showToastMessage(error.message, "error");
  }
};

export const deleteAnswer = (answerId, questionId) => async (dispatch) => {
  try {
    await AnswersService.deleteAnswer(answerId);
    dispatch(getAnswers(questionId));
    showToastMessage("Answer has been successfully deleted", "success");
  } catch (error) {
    showToastMessage(error.message, "error");
  }
};

export const updateAnswer = (updatedAnswer) => async (dispatch) => {
  try {
    await AnswersService.updateAnswer(updatedAnswer);
    showToastMessage("Answer has been successfully edited", "success");
    dispatch(getAnswers(updatedAnswer.questionId));
  } catch (error) {
    showToastMessage(error.message, "error");
  }
};
