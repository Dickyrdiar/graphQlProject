import { configureStore } from "@reduxjs/toolkit";
import { getDataApi } from "./api";

export const store = configureStore({
  reducer: {
    apiSlice: getDataApi,
  },
});
