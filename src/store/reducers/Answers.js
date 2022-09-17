import { FETCH_ANSWERS, ADD_ANSWER } from "../constants/ActionTypes";

const initialState = {
  answers: [],
};

export const reducerAnswers = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ANSWERS:
      return { ...state, answers: payload.reverse() };
    case ADD_ANSWER:
      return {
        ...state,
        answers: [
          {
            dateOfPublished: payload.data.dateOfPublished,
            id: payload.data.id,
            userId: payload.data.userId,
            content: payload.data.content,
            user: payload.user,
          },
          ...state.answers,
        ],
      };
    default:
      return state;
  }
};
