import {
  Box,
  ButtonGroup,
  Progress,
  Flex,
  Button,
  Container,
  FormControl,
} from "@chakra-ui/react";
import controllerUpload from "../../controller/upload.controller";
import EditorDesc from "../../utils/EditorDesc";
import FormController from "../../utils/form";

const Multistep = () => {
  const controller = controllerUpload();

  console.log("data", controller.formik.values.name);

  return (
    <>
      <Container maxW={"80%"}>
        <Box p={6} m="10px auto" padding={"40px"}>
          Post A new Project
        </Box>
        <Box
          borderWidth="1px"
          rounded="lg"
          shadow="1px 1px 3px rgba(0,0,0,0.3)"
          maxWidth={"100em"}
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
            colorScheme="red"
          ></Progress>
          <FormControl>
            {controller.step === 1 ? (
              <Box maxW={"60%"}>
                <FormController
                  label={"Name Project"}
                  type="text"
                  desc={"input name project is requires"}
                  placeholder={"name is required "}
                  value={controller.formik.values.name}
                  onChange={controller.formik.handleChange}
                />
              </Box>
            ) : controller.step === 2 ? (
              <EditorDesc />
            ) : controller.step === 3 ? (
              <FormController />
            ) : controller.step === 4 ? (
              <FormController />
            ) : (
              <FormController />
            )}
          </FormControl>

          <ButtonGroup mt="5%" w="100%">
            <Flex w="100%" justifyContent="space-between">
              <Flex>
                <Button
                  onClick={() => {
                    controller.setStep(controller.step - 1);
                    controller.setProgress(controller.progress - 24);
                  }}
                  isDisabled={controller.step === 1}
                  colorScheme="red"
                  variant="solid"
                  w="7rem"
                  mr="5%"
                >
                  Back
                </Button>
                <Button
                  w="7em"
                  isDisabled={controller.step === 5}
                  onClick={() => {
                    controller.setStep(controller.step + 1);
                    if (controller.step === 5) {
                      controller.setProgress(100);
                    } else {
                      controller.setProgress(controller.progress + 24);
                    }
                  }}
                  colorScheme="#f85964"
                  variant="outline"
                  disabled={
                    controller.step === 1 ? controller.name.length > 6 : null
                  }
                >
                  Next
                </Button>
              </Flex>

              {controller.step === 5 ? (
                <Button
                  w="7rem"
                  colorScheme="red"
                  variant="solid"
                  onClick={controller.formik.handleSubmit}
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
