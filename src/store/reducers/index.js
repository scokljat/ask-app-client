import { combineReducers } from "redux";
import { reducerUser } from "./User";

const rootReducer = combineReducers({
  reducerUser: reducerUser,
});

export default rootReducer;
