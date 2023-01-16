import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

export const fetchData = () => {
  return {
    type: FETCH_DATA,
  };
};

export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchDataError = (error) => {
  return {
    type: FETCH_DATA_ERROR,
    payload: error,
  };
};

export const getDataFromApi = () => {
  return (dispatch) => {
    axios
      .get("https://dev.to/api/articles")
      .then((response) => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchDataError(error));
      });
  };
};
