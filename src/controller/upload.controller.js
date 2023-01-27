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
  const [picture, setPicture] = useState([]);
  const [icon, setIcon] = useState(null);

  const handleChangefile = async (event) => {
    // Get the files from the input
    const files = event.target.files;

    // Convert the files to an array of base64 strings
    const imageArray = await Promise.all(
      Array.from(files).map(async (file) => {
        const fileReader = new FileReader();
        return new Promise((resolve) => {
          fileReader.onloadend = () => {
            resolve({
              name: file.name,
              file: fileReader.result,
            });
          };
          fileReader.readAsDataURL(file);
        });
      })
    );

    // Update the state with the new images
    setPicture([...picture, ...imageArray]);
  };

  const handleChangeIcon = (e) => {
    const icon = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setIcon(reader.result);
    };
    reader.readAsDataURL(icon);
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
        variables: { name, desc, link, picture },
      });
      setLoading(true);
      history("/");
      console.log("click");
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
  };

  // console.log("image file", selectedFile);
  console.log("image", picture);

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
    picture,
    handleChangeInputName,
    handleChangeInputLink,
    handleChangeInputDesc,
    handleSubmitProject,
    handleChangefile,
    handleChangeIcon,
  };
};

export default controllerUpload;
