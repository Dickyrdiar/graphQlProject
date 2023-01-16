import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_PROJECT } from "../models/gql/projectList";
import { getDataApi } from "../redux/api";

function ControllerHome() {
  const [responseDate, setResponseData] = useState([]);
  const [errorData, setErrorData] = useState("");
  const [openDetail, setOpenDetail] = useState(false);

  const { loading, error, data } = useQuery(GET_PROJECT);
  const blog = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataApi());
  }, []);

  console.log("blog", blog);

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
