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

  const handleChangeInputName = (e) => {
    setName(e.target.value);
  };

  const handleChangeInputDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleChangeInputLink = (e) => {
    setLink(e.target.value);
  };

  const handleSubmitProject = () => {
    async (event) => {
      try {
        event.prevenDefault();
        await addProject({
          variables: { name, desc, link },
        });
        useNavigate("/");
        setLoading(true);
        console.log("click");
      } catch (error) {
        setLoading(false);
        console.log("error", error);
      }
    };
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
    handleChangeInputName,
    handleChangeInputLink,
    handleChangeInputDesc,
    handleSubmitProject,
  };
};

export default controllerUpload;
