import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GET_PROJECT } from "../models/gql/projectList";
import { getDataApi } from "../redux/api";
// import DetailController from "./detail.comtroller";

function ControllerHome() {
  const [responseDate, setResponseData] = useState([]);
  const [errorData, setErrorData] = useState("");
  const [openDetail, setOpenDetail] = useState(false);
  const [card, setCardIndex] = useState(null);

  const { loading, error, data } = useQuery(GET_PROJECT);
  const blog = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  // const result = responseDate.find((val) => val.di_project);

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

  const handleClick = (index) => {
    setCardIndex(index.responseDate);

    // const result = responseDate.find((val) => val.diproject);
    // console.log("hasil", result);
  };

  const handleOnClose = () => {
    setOpenDetail(false);
  };

  const handleChangetoblog = () => {
    useNavigate("/blog");
  };

  console.log(card);

  return {
    responseDate,
    errorData,
    loading,
    openDetail,
    handleOnClose,
    handleChangetoblog,
    handleClick,
    // blog,
  };
}

export default ControllerHome;
