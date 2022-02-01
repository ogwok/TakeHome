import { configureStore } from "@reduxjs/toolkit";
import votingReducer from "../features/voting/voting.slice";

export const store = configureStore({
  reducer: {
    voting: votingReducer,
  },
});
