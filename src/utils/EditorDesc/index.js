import {
  Textarea,
  FormControl,
  FormLabel,
  // FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const EditorDesc = (value, onChange, onSubmit, label, desc) => {
  return (
    <>
      <FormControl onSubmit={onSubmit}>
        <FormLabel>{label}</FormLabel>
        <Textarea
          width={"800px"}
          height={"400"}
          value={value}
          onChange={onChange}
          placeholder="Here is a sample placeholder"
        />
        <FormHelperText>{desc}</FormHelperText>
      </FormControl>
    </>
  );
};

export default EditorDesc;
