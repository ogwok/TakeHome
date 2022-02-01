import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";

const initialState = {
  upVote: {
    loading: "",
    error: "",
  },
  downVote: {
    loading: "",
    error: "",
  },
  count: 0,
};

export const upVote = createAsyncThunk("voting/upVote", async (id) => {
  const response = await api.vote(id, 1);
  return response.data;
});

export const downVote = createAsyncThunk("voting/downVote", async (id) => {
  const response = await api.vote(id, -1);
  return response.data;
});

export const votingSlice = createSlice({
  name: "voting",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(upVote.pending, (state) => {
        state.upVote = { ...state.upVote, loading: true };
      })
      .addCase(upVote.fulfilled, (state, action) => {
        state.upVote = {
          ...state.downVote,
          loading: false,
        };
      })
      .addCase(downVote.pending, (state) => {
        state.downVote = { ...state.downVote, loading: true };
      })
      .addCase(downVote.fulfilled, (state, action) => {
        state.downVote = {
          ...state.downVote,
          loading: false,
        };
      });
  },
});

export default votingSlice.reducer;
