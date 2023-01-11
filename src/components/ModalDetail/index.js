/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Container,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";

const DetailModal = ({ isOpen, onClose, data }) => {
  console.log("data", data);
  return (
    <Container maxW={"7xl"}>
      <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
        {/* <ModalOverlay /> */}
        <ModalOverlay />
        <ModalContent maxW={"70%"} padding={"40px"}>
          <ModalHeader>
            <Box display={"flex"} justifyContent="space-between">
              <Box>Modal title</Box>
              <Box>
                {" "}
                <Button
                  style={{
                    border: "solid 1 px #e6e6e6",
                    borderRadius: "4px",
                  }}
                  backgroundColor={"#ffff"}
                  mr={3}
                >
                  Visit
                </Button>
                <Button backgroundColor={"#f85964"} variant="ghost">
                  Vote
                </Button>{" "}
              </Box>
            </Box>

            <Box>
              <ModalCloseButton />
            </Box>
          </ModalHeader>

          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              You can scroll the content behind the modal
            </Text>
            {/* <Lorem count={2} /> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default DetailModal;
