import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";

const initialState = {
  post: {
    data: null,
    loading: false,
    error: null,
  },
  new: { data: null, loading: false, error: null },
  hot: { data: null, loading: false, error: null },
  top: { data: null, loading: false, error: null },
};

export const getPost = createAsyncThunk("posts/getPost", async (postSlug) => {
  const response = await api.getPost(postSlug);
  return response.data[0].data?.children[0].data;
});

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async ({ postType, params }) => {
    const response = await api.getPosts(postType, params);

    return { postType, ...response.data.data };
  }
);

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
      })
      .addCase(getPosts.pending, (state) => {
        state.new = {
          ...state.posts,
          loading: true,
        };
        state.top = {
          ...state.posts,
          loading: true,
        };
        state.hot = {
          ...state.posts,
          loading: true,
        };
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state[action.payload.postType] = {
          ...state.posts,
          loading: false,
          data: {
            after: action.payload.after,
            children: state[action.payload.postType].data
              ? [
                  ...state[action.payload.postType].data?.children,
                  ...action.payload.children,
                ]
              : action.payload.children,
          },
        };
      });
  },
});

export default postSlice.reducer;
