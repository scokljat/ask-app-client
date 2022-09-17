import QuestionsService from "../../api/services/Questions";
import {
  FETCH_PAGINATED_QUESTIONS,
  FETCH_ALL_QUESTIONS,
  FETCH_USER_QUESTIONS,
  ADD_QUESTION,
} from "../constants/ActionTypes";

export const getPaginatedQuestions = (pageSize) => async (dispatch) => {
  try {
    const { data } = await QuestionsService.getPaginatedQuestions(pageSize);

    dispatch({ type: FETCH_PAGINATED_QUESTIONS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getAllQuestions = () => async (dispatch) => {
  try {
    const { data } = await QuestionsService.getAllQuestions();

    dispatch({ type: FETCH_ALL_QUESTIONS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getUserQuestions = (id) => async (dispatch) => {
  try {
    const { data } = await QuestionsService.getUserQuestions(id);

    dispatch({ type: FETCH_USER_QUESTIONS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createQuestion = (question) => async (dispatch, getState) => {
  const user = getState().reducerUser.user;

  try {
    const { data } = await QuestionsService.createQuestion(question);

    dispatch({ type: ADD_QUESTION, payload: { data, user } });
  } catch (error) {
    console.log(error);
  }
};
