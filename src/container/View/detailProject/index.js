/* eslint-disable no-unused-vars */
import { Box, Button, Container, Text, Image } from "@chakra-ui/react";
import DetailController from "../../../controller/detail.controller";

const DetailProject = () => {
  const controller = DetailController();

  console.log("p", controller?.parseResponse?.name);

  return (
    <Box>
      <Container maxWidth={"80em"}>
        <Box padding={"3%"}>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            width={"130px"}
            height={"120px"}
            padding={"-4px"}
            // margin={"-20px"}
            borderRadius="sm"
            // padding={"3%"}
          />
        </Box>

        <Box
          display={"flex"}
          justifyContent="space-between"
          style={{
            alignItems: "center",
            padding: "3%",
            marginTop: "-3em",
          }}
        >
          <Box>{controller?.parseResponse?.name}</Box>
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
            <Button
              onClick={controller.handleClickVote}
              backgroundColor={"#f85964"}
              variant="ghost"
            >
              Vote {controller.vote}
            </Button>{" "}
          </Box>
        </Box>

        <Box padding={"3%"}>{controller?.parseResponse?.desc}</Box>
      </Container>
    </Box>
  );
};

export default DetailProject;
