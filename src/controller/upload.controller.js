// import { useFormik } from "formik";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { add_project } from "../models/gql/projectList";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import * as Yup from "yup";
import { useFormik } from "formik";

const controllerUpload = () => {
  const [addProject] = useMutation(add_project);
  const [loading, setLoading] = useState(false);
  // const [name, setName] = useState("");
  // const [desc, setDesc] = useState("");
  // const [link, setLink] = useState("");
  const [progress, setProgress] = useState(10);
  const [step, setStep] = useState(1);
  const toast = useToast();

  const initialValues = {
    name: "",
    desc: "",
    link: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required").max(25, "Must be 25 character"),
    desc: Yup.string()
      .required("Required")
      .max(60, "desc must be 60 character"),
    link: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (event) => {
      try {
        event.preventDefault();
        await addProject({
          variables: initialValues,
        });
        setLoading(true);
        useNavigate("/");
      } catch (error) {
        setLoading(false);
        console.log("error", error);
      }
    },
  });

  // const handleChangeInput = (e) => {
  //   e.preventDefault();
  //   setName(e.target.value);
  //   setDesc(e.target.value);
  //   setLink(e.target.value);
  // };

  return {
    // link
    loading,
    // handleUploadProject,
    formik,
    progress,
    setProgress,
    step,
    setStep,
    toast,
    // handleChangeInput,
  };
};

export default controllerUpload;
