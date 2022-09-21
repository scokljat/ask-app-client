import {
  FETCH_PAGINATED_QUESTIONS,
  FETCH_ALL_QUESTIONS,
  FETCH_USER_QUESTIONS,
  FETCH_QUESTION_BY_ID,
  FETCH_HOT_QUESTIONS,
  ADD_QUESTION,
} from "../constants/ActionTypes";

const initialState = {
  paginatedQuestions: [],
  allQuestions: [],
  userQuestions: [],
  hotQuestions: [],
  question: {},
};

export const reducerQuestions = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PAGINATED_QUESTIONS:
      return { ...state, paginatedQuestions: payload.reverse() };
    case FETCH_ALL_QUESTIONS:
      return { ...state, allQuestions: payload.reverse() };
    case FETCH_USER_QUESTIONS:
      return { ...state, userQuestions: payload.reverse() };
    case FETCH_QUESTION_BY_ID:
      return { ...state, question: payload };
    case FETCH_HOT_QUESTIONS:
      return { ...state, hotQuestions: payload.reverse() };
    case ADD_QUESTION:
      return {
        ...state,
        allQuestions: [
          {
            dateOfPublished: payload.data.dateOfPublished,
            id: payload.data.id,
            userId: payload.data.userId,
            content: payload.data.content,
            user: payload.user,
            likes: [],
            dislikes: [],
          },
          ...state.allQuestions,
        ],
      };

    default:
      return state;
  }
};
