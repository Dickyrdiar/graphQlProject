import { useQuery } from "@apollo/client";

import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { GET_PROJECT } from "../models/gql/projectList";
// import blogSlice from "../redux/blogSlice";

function ControllerHome() {
  const [responseDate, setResponseData] = useState([]);
  const [errorData, setErrorData] = useState("");
  const [openDetail, setOpenDetail] = useState(false);
  // const blog = useSelector((state) => state.responseDate);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(blogSlice());
  // });

  const { loading, error, data } = useQuery(GET_PROJECT);

  useEffect(() => {
    if (data) {
      setResponseData(data);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      setErrorData(error);
    }
  }, []);

  const handleClick = () => {
    console.log("click");
    setOpenDetail(true);
  };

  const handleOnClose = () => {
    setOpenDetail(false);
  };

  console.log(loading);

  return {
    responseDate,
    errorData,
    loading,
    handleClick,
    openDetail,
    handleOnClose,
    // blog,
  };
}

export default ControllerHome;
