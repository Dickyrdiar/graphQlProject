/* eslint-disable no-unused-vars */
import {
  Box,
  Card,
  CardHeader,
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
} from "@chakra-ui/react";
import styled from "styled-components";
import controllerUpload from "../../controller/upload.controller";
import ButtonController from "../../utils/button";
import FormController from "../../utils/form";

const FormUpload = () => {
  const controller = controllerUpload();

  console.log("link", controller.link);
  return (
    <Main>
      <Container maxW={"80%"}>
        <Box padding={"60px"}>
          <Box>Post A new Project</Box>

          <Box mt={"12"} width={"100%"}>
            <Card>
              <Tabs colorScheme={"#f85964"}>
                <CardHeader>
                  <TabList>
                    <Tab>Name</Tab>
                    <Tab>Desc</Tab>
                    <Tab>Link</Tab>
                    <Tab>Icon</Tab>
                    <Tab>Image</Tab>
                  </TabList>
                </CardHeader>

                <Box>
                  <TabPanels>
                    <Box maxW={"60%"}>
                      <TabPanel>
                        <FormController
                          onSubmit={controller.formik.handleSubmit}
                          label={"Name Project"}
                          type="text"
                          desc={"input name project is requires"}
                          placeholder={"name is required "}
                          value={controller.formik.values.name}
                          onChange={controller.formik.handleChange}
                        />
                      </TabPanel>
                    </Box>
                  </TabPanels>
                </Box>
              </Tabs>

              <Box
                display={"flex"}
                justifyContent={"flex-end"}
                padding={"20px"}
              >
                <ButtonController
                  disabled={controller.link.length < 6}
                  validColor
                  color={"#ffff"}
                  props={"Next"}
                />
              </Box>
            </Card>
          </Box>
        </Box>
      </Container>
    </Main>
  );
};

export default FormUpload;

const Main = styled.div`
  background-color: "#f0f0f5";
  width: 100%;
`;
