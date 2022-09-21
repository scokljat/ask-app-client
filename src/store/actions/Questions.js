import QuestionsService from "../../api/services/Questions";
import {
  FETCH_PAGINATED_QUESTIONS,
  FETCH_ALL_QUESTIONS,
  FETCH_USER_QUESTIONS,
  FETCH_QUESTION_BY_ID,
  FETCH_HOT_QUESTIONS,
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

export const getQuestionById = (id) => async (dispatch) => {
  try {
    const { data } = await QuestionsService.getQuestionById(id);

    dispatch({ type: FETCH_QUESTION_BY_ID, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getHotQuestions = () => async (dispatch) => {
  try {
    const { data } = await QuestionsService.getHotQuestions();

    dispatch({ type: FETCH_HOT_QUESTIONS, payload: data });
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

export const likeQuestion =
  (likedQuestion, question, page, pageSize) => async (dispatch) => {
    try {
      await QuestionsService.likeQuestion(likedQuestion);
      await QuestionsService.increaseQuestionLikes(question);

      if (page === "/questions") {
        dispatch(getAllQuestions());
      } else if (page === "/dashboard") {
        dispatch(getPaginatedQuestions(pageSize));
      } else {
        dispatch(getUserQuestions(likedQuestion.userId));
      }
    } catch (error) {
      console.log(error);
    }
  };

export const dislikeQuestion =
  (dislikedQuestion, page, pageSize) => async (dispatch) => {
    try {
      await QuestionsService.dislikeQuestion(dislikedQuestion);

      if (page === "/questions") {
        dispatch(getAllQuestions());
      } else if (page === "/dashboard") {
        dispatch(getPaginatedQuestions(pageSize));
      } else {
        dispatch(getUserQuestions(dislikedQuestion.userId));
      }
    } catch (error) {
      console.log(error);
    }
  };

export const deleteQuestion =
  (questionId, page, pageSize, userId) => async (dispatch) => {
    try {
      await QuestionsService.deleteQuestion(questionId);
      if (page === "/questions") {
        dispatch(getAllQuestions());
      } else if (page === "/dashboard") {
        dispatch(getPaginatedQuestions(pageSize));
      } else {
        dispatch(getUserQuestions(userId));
      }
    } catch (error) {
      console.log(error);
    }
  };

export const updateQuestion =
  (updatedQuestion, page, pageSize) => async (dispatch) => {
    try {
      await QuestionsService.updateQuestion(updatedQuestion);
      if (page === "/questions") {
        dispatch(getAllQuestions());
      } else if (page === "/dashboard") {
        dispatch(getPaginatedQuestions(pageSize));
      } else {
        dispatch(getUserQuestions(updatedQuestion.userId));
      }
    } catch (error) {
      console.log(error);
    }
  };
