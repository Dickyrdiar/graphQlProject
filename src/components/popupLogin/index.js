/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import Authentication from "../../auth/auth";

const PopupLogin = ({ isOpen, onClose, onClickLogin }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody
            style={{
              marginTop: "30px",
            }}
          >
            <Stack
              spacing={8}
              align={"center"}
              justify={["center"]}
              direction={["column", "row", "row", "row"]}
              pt={[4, 4, 0, 0]}
            >
              <Icon
                icon="fa6-brands:product-hunt"
                color="#f85964"
                width={"90"}
                height={"90"}
              />
            </Stack>

            <Stack
              spacing={8}
              align={"center"}
              justify={["center"]}
              direction={["column", "row", "row", "row"]}
              pt={[4, 4, 0, 0]}
              marginTop={"12px"}
            >
              <Button
                variant={"solid"}
                color="#FFFF"
                backgroundColor={"#f85964"}
                size={"sm"}
                mr={4}
                onClick={onClickLogin}
              >
                Sign in With GitHub
              </Button>

              <Button
                variant={"solid"}
                color="#FFFF"
                backgroundColor={"#f85964"}
                size={"sm"}
                mr={4}
                onClick={onClickLogin}
              >
                Sign in With Gmail
              </Button>
            </Stack>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PopupLogin;
