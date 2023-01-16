import * as Yup from "yup";

export const yupValidation = () => {
  Yup.object({
    link: Yup.string().required("Link is Required"),
    name: Yup.string().required("Name is Required"),
    desc: Yup.string().required("Desc is Required"),
  });
};
