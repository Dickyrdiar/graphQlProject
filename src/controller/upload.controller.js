// import { useFormik } from "formik";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { add_project } from "../models/gql/projectList";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
// import { getBase64StringFromDataURL } from "../utils/imageConvertBase64";

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
  const [selectedFile, setSelectedFile] = useState([]);
  const [icon, setIcon] = useState(null);

  const handleChangefile = (e) => {
    const newImages = [...selectedFile];
    const reader = new FileReader();
    reader.onloadend = () => {
      for (let i = 0; i < e.target.files.length; i++) {
        newImages.push(URL.createObjectURL(e.target.files[i]));
      }
    };
    setSelectedFile(newImages);
  };

  const handleChangeIcon = (e) => {
    // setIcon(e.target.value);
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

  // console.log("image file", selectedFile);

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
