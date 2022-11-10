import { configureStore } from "@reduxjs/toolkit";
import { surveyReducer } from "./slices/surveySlice";

export default configureStore({
  reducer: {
    survey: surveyReducer,
  },
});
