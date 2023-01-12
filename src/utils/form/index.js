/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

const FormController = ({ label, type, desc }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input type={type} />
      <FormHelperText>{desc}</FormHelperText>
    </FormControl>
  );
};

export default FormController;
