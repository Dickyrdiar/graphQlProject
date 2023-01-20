import { Box } from "@chakra-ui/react";
import { CKEditor } from "ckeditor4-react";

const EditorDesc = (value, onChange) => {
  return (
    <>
      <Box>
        <CKEditor value={value} onChange={onChange} />
      </Box>
    </>
  );
};

export default EditorDesc;
