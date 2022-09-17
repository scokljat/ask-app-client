import { combineReducers } from "redux";
import { reducerUser } from "./User";
import { reducerQuestions } from "./Questions";

const rootReducer = combineReducers({
  reducerUser: reducerUser,
  reducerQuestions: reducerQuestions,
});

export default rootReducer;
