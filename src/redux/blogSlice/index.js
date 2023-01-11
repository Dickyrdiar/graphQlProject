import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  responseData: [],
  error: "",
};

export const fetchBlogApi = createAsyncThunk(
  "article/getArticles",
  async (data) => {
    try {
      const response = await axios.get("https://dev.to/api/articles", data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
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
      (state.loading = false),
        (state.responseData = action.payload),
        (state.error = "");
    });

    builder.addCase(fetchBlogApi.rejected, (state, action) => {
      (state.loading = false),
        (state.responseData = []),
        (state.error = action.error.message);
    });
  },
});

export default blogSlice.reducer;
