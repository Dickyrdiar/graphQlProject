/* eslint-disable no-unused-vars */
import { useQuery } from "@apollo/client";
import { GET_PROJECT, get_project_by_id } from "../models/gql/projectList";

const DetailController = ({ di_project }) => {
  const { loading, error, data } = useQuery(get_project_by_id, {
    variables: { di_project },
  });

  console.log(data);

  return { data, error, loading };
};

export default DetailController;
