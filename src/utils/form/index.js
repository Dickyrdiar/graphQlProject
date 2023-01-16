/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

const FormController = ({
  label,
  // type,
  desc,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        value={value}
        onChange={onChange}
        // type={type}
        placeholder={placeholder}
      />
      <FormHelperText>{desc}</FormHelperText>
    </FormControl>
  );
};

export default FormController;
