// import { useFormik } from "formik";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { add_project } from "../models/gql/projectList";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const controllerUpload = () => {
  const [addProject] = useMutation(add_project);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");
  const [progress, setProgress] = useState(10);
  const [step, setStep] = useState(1);
  const toast = useToast();
  const history = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [icon, setIcon] = useState(null);

  const handleChangefile = (e) => {
    setSelectedFile(e.target.value);
  };

  const handleChangeIcon = (e) => {
    setIcon(e.target.value);
  };

  const handleChangeInputName = (e) => {
    setName(e.target.value);
  };

  const handleChangeInputDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleChangeInputLink = (e) => {
    setLink(e.target.value);
  };

  const handleSubmitProject = async (event) => {
    try {
      console.log("click");
      event.preventDefault();
      await addProject({
        variables: { name, desc, link, selectedFile },
      });
      setLoading(true);
      history("/");
      console.log("click");
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  return {
    name,
    desc,
    link,
    loading,
    progress,
    setProgress,
    step,
    setStep,
    toast,
    icon,
    selectedFile,
    handleChangeInputName,
    handleChangeInputLink,
    handleChangeInputDesc,
    handleSubmitProject,
    handleChangefile,
    handleChangeIcon,
  };
};

export default controllerUpload;
