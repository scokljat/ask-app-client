import QuestionsService from "../../api/services/Questions";
import {
  FETCH_PAGINATED_QUESTIONS,
  FETCH_ALL_QUESTIONS,
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
