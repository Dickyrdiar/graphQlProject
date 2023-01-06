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
} from "@chakra-ui/react";

const DetailModal = ({ isOpen, onClose, name }) => {
  return (
    <Container maxW={"7xl"}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Detail Project</ModalHeader>
          <ModalCloseButton />

          <ModalBody>{name}</ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default DetailModal;
