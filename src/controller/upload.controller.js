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

  const handleUploadProject = async (event) => {
    console.log("click");
    try {
      event.preventDefault();
      setLoading(true);
      await addProject({
        variables: { name, desc, link },
      });
      useNavigate("/");
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  const handleChangeInput = (e) => {
    e.preventDefault();
    setName(e.target.value);
    setDesc(e.target.value);
    setLink(e.target.value);
  };

  return {
    link,
    loading,
    handleUploadProject,
    name,
    desc,
    setName,
    setDesc,
    setLink,
    progress,
    setProgress,
    step,
    setStep,
    toast,
    handleChangeInput,
  };
};

export default controllerUpload;
