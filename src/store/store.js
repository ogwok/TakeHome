import { configureStore } from "@reduxjs/toolkit";
import votingReducer from "../features/voting/voting.slice";
import postReducer from "../features/posts/posts.slice";

export const store = configureStore({
  reducer: {
    voting: votingReducer,
    posts: postReducer,
  },
});
