import { configureStore } from "@reduxjs/toolkit";
import { getDataFromApi } from "./api";

export const store = configureStore({
  reducer: {
    api: getDataFromApi,
  },
});
