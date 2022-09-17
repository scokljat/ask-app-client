import {
  FETCH_PAGINATED_QUESTIONS,
  FETCH_ALL_QUESTIONS,
} from "../constants/ActionTypes";

const initialState = {
  paginatedQuestions: [],
  allQuestions: [],
};

export const reducerQuestions = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PAGINATED_QUESTIONS:
      return { ...state, paginatedQuestions: payload.reverse() };
    case FETCH_ALL_QUESTIONS:
      return { ...state, allQuestions: payload.reverse() };

    default:
      return state;
  }
};
