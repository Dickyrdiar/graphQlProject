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
} from "@chakra-ui/react";

const DetailModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      this is modal
    </Modal>
  );
};

export default DetailModal;
