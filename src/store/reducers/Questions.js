import { FETCH_PAGINATED_QUESTIONS } from "../constants/ActionTypes";

const initialState = {
  paginatedQuestions: [],
};

export const reducerQuestions = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PAGINATED_QUESTIONS:
      return { ...state, paginatedQuestions: payload.reverse() };

    default:
      return state;
  }
};
