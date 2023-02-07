/* eslint-disable no-unused-vars */
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { get_project_by_id } from "../models/gql/projectList";

const DetailController = () => {
  const [vote, setVote] = useState(0);

  const response = localStorage.getItem("response");
  console.log("id", response.di_project);

  const { loading, error, data } = useQuery(get_project_by_id, {
    variables: {},
  });

  const handleClickVote = () => {
    setVote(vote + 1);
  };

  console.log(data, "response");

  return { data, error, loading, vote, handleClickVote };
};

export default DetailController;
