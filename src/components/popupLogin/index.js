import { Box, Modal } from "@chakra-ui/react";

const PopupLogin = (isOpen) => {
  return (
    <>
      <Modal isOpen={isOpen}>
        <Box>this is pop up login & signup</Box>
      </Modal>
    </>
  );
};

export default PopupLogin;
