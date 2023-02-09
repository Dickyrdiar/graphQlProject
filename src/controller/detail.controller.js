/* eslint-disable no-unused-vars */
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { get_project_by_id } from "../models/gql/projectList";

const DetailController = () => {
  const { loading, data, error } = useQuery(get_project_by_id, {
    variables: "a1386613-305b-4c1b-8a72-b5374aa0e76a",
  });
  const [vote, setVote] = useState(0);

  const response = localStorage.getItem("response");
  const parseResponse = JSON.parse(response);

  console.log("l", data);

  const handleClickVote = () => {
    setVote(vote + 1);
  };

  return { vote, handleClickVote, parseResponse };
};

export default DetailController;
