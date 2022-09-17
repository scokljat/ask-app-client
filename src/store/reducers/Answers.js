import { FETCH_ANSWERS } from "../constants/ActionTypes";

const initialState = {
  answers: [],
};

export const reducerAnswers = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ANSWERS:
      return { ...state, answers: payload };

    default:
      return state;
  }
};
