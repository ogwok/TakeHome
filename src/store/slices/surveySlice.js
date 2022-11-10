import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "survey",
  initialState: {
    survey: [],
    options: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // eslint-disable-next-line no-unused-expressions

      state.survey.push({ ...action.payload });
    },
    addOptions: (state, action) => {
      state.options.push({ ...action.payload });
    },

    addOptionsValues: (state, action) => {
      let index = state.options.findIndex(
        (obj) => obj.id === action.payload.optionId
      );
      state.options[index].value = action.payload.value;
    },

    addRadioValues: (state, action) => {
      let index = state.survey.findIndex(
        (obj) => obj.id === action.payload.questionId
      );
      console.log("slice", index);
      state.survey[index].checked = !state.survey[index].checked;
    },

    addValues: (state, action) => {
      let index = state.survey.findIndex(
        (obj) => obj.id === action.payload.questionId
      );
      state.survey[index].value = action.payload.value;
    },

    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.survey = removeItem;
    },
  },
});

export const surveyReducer = cartSlice.reducer;
export const {
  addToCart,
  removeItem,
  addValues,
  addOptions,
  addOptionsValues,
  addRadioValues,
} = cartSlice.actions;
