/* eslint-disable no-unused-vars */
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../models/gql/projectList";

const DetailController = () => {
  const { loading, error, data } = useQuery(GET_PROJECT);

  console.log(data);

  return { data, error, loading };
};

export default DetailController;
