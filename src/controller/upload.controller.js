import { useFormik } from "formik";
// import { yupValidation } from "../models/yupValidation";
// import Yup from "yup";
import * as Yup from "yup";

const controllerUpload = () => {
  const formik = useFormik({
    initialValues: {
      link: "",
      name: "",
      desc: "",
    },

    validationSchema: Yup.object({
      link: Yup.string().required("Link is Required"),
      name: Yup.string().required("Name is Required"),
      desc: Yup.string().required("Desc is Required"),
    }),
  });

  return { formik };
};

export default controllerUpload;
