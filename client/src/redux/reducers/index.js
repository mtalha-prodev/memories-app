import { combineReducers } from "redux";
import posts from "./posts.reducer";

export const reducer = combineReducers({
  posts,
});
