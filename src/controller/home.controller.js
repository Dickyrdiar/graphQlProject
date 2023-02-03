/* eslint-disable no-unused-vars */
import { useQuery } from "@apollo/client";
import { useEffect, useMemo, useState } from "react";
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
  const [valueSearch, setValueSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const { loading, error, data } = useQuery(GET_PROJECT);
  const blog = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    dispatch(getDataApi());
  }, []);

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

  const filterData = useMemo(() => {
    return responseDate?.Project?.filter((item) =>
      item.name.toLowerCase().includes(valueSearch.toLowerCase())
    );
  }, [responseDate, valueSearch]);

  console.log("filter", filterData);

  const handleSearchValue = (e) => {
    setValueSearch(e.target.value);
  };

  const hadleUploadButton = () => {
    history("/upload-project");
  };

  const handleTohome = () => {
    history("/");
  };

  const handleClick = (index) => {
    setCardIndex(index.responseDate);
  };

  const handleOnClose = () => {
    setOpenDetail(false);
  };

  const handleChangetoblog = () => {
    useNavigate("/blog");
  };

  return {
    errorData,
    loading,
    openDetail,
    handleOnClose,
    handleChangetoblog,
    handleClick,
    valueSearch,
    filterData,
    handleSearchValue,
    card,
    handleTohome,
    hadleUploadButton,
    searchResult,
  };
}

export default ControllerHome;
