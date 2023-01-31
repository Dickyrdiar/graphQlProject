/* eslint-disable no-unused-vars */
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { getDataApi } from "./api";

export const store = configureStore({
  // reducer: {
  //   blog: getDataApi,
  // },
  // middleware: (getDefaultMiddleware) => {
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   });
  // },

  reducer: { blog: getDataApi },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
