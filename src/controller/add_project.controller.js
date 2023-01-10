/* eslint-disable no-unused-vars */
import { useMutation } from "@apollo/client";
import { ADD_PROJECT } from "../models/gql/projectList";

const AddProject = () => {
  const [insertProject] = useMutation(ADD_PROJECT);
};

export default AddProject;
