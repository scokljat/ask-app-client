import { combineReducers } from "redux";
import { reducerUser } from "./User";
import { reducerQuestions } from "./Questions";
import { reducerAnswers } from "./Answers";

const rootReducer = combineReducers({
  reducerUser: reducerUser,
  reducerQuestions: reducerQuestions,
  reducerAnswers: reducerAnswers,
});

export default rootReducer;
