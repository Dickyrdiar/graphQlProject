/* eslint-disable react/prop-types */
import {
  Textarea,
  FormControl,
  FormLabel,
  // FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

function EditorDesc({ value, onChange, onSubmit, label, desc, placeholder }) {
  return (
    <>
      <FormControl onSubmit={onSubmit}>
        <FormLabel>{label}</FormLabel>
        <Textarea
          width={"800px"}
          height={"400"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <FormHelperText>{desc}</FormHelperText>
      </FormControl>
    </>
  );
}

export default EditorDesc;
