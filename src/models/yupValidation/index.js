import * as Yup from "yup";

export const uploadSchema = Yup.object().shape({
  name: Yup.string().min(2, "to short").max(30, "to long").required("required"),
  desc: Yup.string().min(3, "to short").max(60, "to long").required("required"),
});
