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
  type,
  desc,
  placeholder,
  value,
  onChange,
  name,
  onSubmit,
}) => {
  return (
    <FormControl onSubmit={onSubmit}>
      <FormLabel>{label}</FormLabel>
      <Input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        name={name}
      />
      <FormHelperText>{desc}</FormHelperText>
    </FormControl>
  );
};

export default FormController;
