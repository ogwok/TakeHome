import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";

const initialState = {
  post: {
    data: null,
    loading: false,
    error: null,
  },
};

export const getPost = createAsyncThunk("posts/getPost", async (id) => {
  const response = await api.getPost(id);
  return response.data;
});

export const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPost.pending, (state) => {
        state.post = { ...state.post, loading: true };
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.post = {
          ...state.post,
          loading: false,
          data: action.payload,
        };
      });
  },
});

export default postSlice.reducer;
