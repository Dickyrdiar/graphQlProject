import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_PROJECT } from "../models/gql/projectList";

function ControllerHome() {
  const [responseDate, setResponseData] = useState([]);
  const [errorData, setErrorData] = useState("");
  const [openDetail, setOpenDetail] = useState(false);

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

  console.log(loading);

  return { responseDate, errorData, loading, handleClick, openDetail };
}

export default ControllerHome;
