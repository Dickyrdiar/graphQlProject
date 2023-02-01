/* eslint-disable no-unused-vars */
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_PROJECT, get_project_by_id } from "../models/gql/projectList";

const DetailController = ({ di_project }) => {
  const [vote, setVote] = useState(0);
  const { loading, error, data } = useQuery(get_project_by_id, {
    variables: { di_project },
  });

  const handleClickVote = () => {
    setVote(vote + 1);
  };

  console.log(data);

  return { data, error, loading, vote, handleClickVote };
};

export default DetailController;
