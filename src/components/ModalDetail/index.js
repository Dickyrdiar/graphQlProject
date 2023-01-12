/* eslint-disable no-undef */
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
import { visit } from "graphql";

const DetailModal = ({ isOpen, onClose, name, desc, link }) => {
  // console.log("data", name);

  const handleClickVisit = () => {
    window.open(link);
    console.log("click");
  };

  return (
    <Container maxW={"7xl"}>
      <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
        {/* <ModalOverlay /> */}
        <ModalOverlay />
        <ModalContent maxW={"70%"} padding={"40px"}>
          <ModalHeader>
            <Box display={"flex"} justifyContent="space-between">
              <Box>{name}</Box>
              <Box>
                {" "}
                <Button
                  style={{
                    border: "solid 1 px #e6e6e6",
                    borderRadius: "4px",
                  }}
                  backgroundColor={"#ffff"}
                  mr={3}
                  onClick={handleClickVisit}
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
              {desc}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default DetailModal;
