import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataApi = createAsyncThunk("FETCH_DATA", async () => {
  const response = await axios.get("https://dev.to/api/articles");
  return response.data;
});

export const apiSlice = createSlice({
  name: "api",
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDataApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDataApi.fulfilled, (state, action) => {
        (state.loading = false), (state.data = action.payload);
      })
      .addCase(getDataApi.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      });
  },
});

// export const fetchData = () => {
//   return {
//     type: FETCH_DATA,
//   };
// };

// export const fetchDataSuccess = (data) => {
//   return {
//     type: FETCH_DATA_SUCCESS,
//     payload: data,
//   };
// };

// export const fetchDataError = (error) => {
//   return {
//     type: FETCH_DATA_ERROR,
//     payload: error,
//   };
// };

// export const getDataFromApi = () => {
//   return (dispatch) => {
//     axios
//       .get("https://dev.to/api/articles")
//       .then((response) => {
//         dispatch(fetchDataSuccess(response.data));
//       })
//       .catch((error) => {
//         dispatch(fetchDataError(error));
//       });
//   };
// };
