import {
  Box,
  ButtonGroup,
  Progress,
  Flex,
  Button,
  Container,
} from "@chakra-ui/react";
import controllerUpload from "../../controller/upload.controller";
import FormController from "../../utils/form";

const Multistep = () => {
  const controller = controllerUpload();

  console.log("name", controller.name);

  return (
    <>
      <Container maxW={"80%"}>
        <Box>Post A new Project</Box>
        <Box
          borderWidth="1px"
          rounded="lg"
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          maxWidth={800}
          p={6}
          m="10px auto"
          as="form"
        >
          <Progress
            hasStripe
            value={controller.progress}
            mb="5%"
            mx="5%"
            isAnimated
            // color={"#f85964"}
            colorScheme="red"
          ></Progress>
          {controller.step === 1 ? (
            <Box maxW={"60%"}>
              <FormController
                label={"Name Project"}
                type="text"
                desc={"input name project is requires"}
                placeholder={"name is required "}
                value={controller.name}
                onChange={controller.handleChangeInput}
              />
            </Box>
          ) : controller.step === 2 ? (
            <FormController />
          ) : (
            <FormController />
          )}

          <ButtonGroup mt="5%" w="100%">
            <Flex w="100%" justifyContent="space-between">
              <Flex>
                <Button
                  onClick={() => {
                    controller.setStep(controller.step - 1);
                    controller.setProgress(controller.progress - 33.33);
                  }}
                  isDisabled={controller.step === 1}
                  colorScheme="red"
                  variant="solid"
                  w="7rem"
                  mr="5%"
                  // color={"#f85964"}
                >
                  Back
                </Button>
                <Button
                  w="7em"
                  isDisabled={controller.step === 3}
                  onClick={() => {
                    controller.setStep(controller.step + 1);
                    if (controller.step === 3) {
                      controller.setProgress(100);
                    } else {
                      controller.setProgress(controller.progress + 33.33);
                    }
                  }}
                  colorScheme="#f85964"
                  variant="outline"
                >
                  Next
                </Button>
              </Flex>

              {controller.step === 3 ? (
                <Button
                  w="7rem"
                  colorScheme="red"
                  variant="solid"
                  onClick={controller.handleUploadProject}
                >
                  Submit
                </Button>
              ) : null}
            </Flex>
          </ButtonGroup>
        </Box>
      </Container>
    </>
  );
};

export default Multistep;
