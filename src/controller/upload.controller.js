// import { useFormik } from "formik";
import { useState } from "react";
import { useFormik } from "formik";
import { uploadSchema } from "../models/yupValidation";

const controllerUpload = () => {
  const [link, setLink] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      desc: "",
      link: "",
    },
    validationSchema: uploadSchema,
  });

  const handleInputLink = (e) => {
    setLink(e.target.value);
  };

  return { link, handleInputLink, formik };
};

export default controllerUpload;
