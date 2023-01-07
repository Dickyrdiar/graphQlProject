import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = "https://dev.to/api/articles";

const initialState = {
  loading: false,
  responseData: [],
  error: "",
};

export const fetchBlogApi = createAsyncThunk(
  "article/getArticles",
  async () => {
    const response = await axios.get(base_url);
    return response.data;
  }
);

const blogSlice = createSlice({
  name: "BlogSlice",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchBlogApi.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchBlogApi.fulfilled, (state, action) => {
      (state.loading = false), (state.responseData = action.payload);
      state.error = "";
    });

    builder.addCase(fetchBlogApi.rejected, (state, action) => {
      (state.loading = false),
        (state.responseData = []),
        (state.error = action.error.message);
    });
  },
});

export default blogSlice.reducer;
