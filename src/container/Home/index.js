/* eslint-disable no-unused-vars */
import React from "react";
import {
  Box,
  Container,
  Divider,
  Flex,
  Stack,
  Center,
  CircularProgress,
} from "@chakra-ui/react";
import styled from "styled-components";
import ProductCard from "../../components/ProductList/card";
import DetailModal from "../../components/ModalDetail";
import ControllerHome from "../../controller/home.controller";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const HomeIndex = () => {
  const controller = ControllerHome();

  if (controller.loading) {
    return (
      <Box
        alignItems={"center"}
        style={{
          padding: "23em",
          marginTop: "-9em",
        }}
      >
        <CircularProgress value={30} isIndeterminate color="#d9d9d9" />
      </Box>
    );
  }

  return (
    <>
      <Main>
        <Box
          width={"100%"}
          backgroundColor={"GrayText"}
          display={"flex"}
          justifyContent={"space-around"}
        >
          <Box>
            {controller.responseDate?.product &&
              controller.responseDate?.product?.map((val) => {
                return (
                  <>
                    <Container maxW={"5xl"} as={Stack} spacing={12}>
                      <ProductCard
                        key={val.id}
                        title={val.name}
                        desc={val.desc}
                        image={val.image}
                        // onClick={handleClick}
                        onClick={controller.handleClick}
                        // vote={val.vote}
                        // commentCount={val.comment}
                      />
                    </Container>
                    <DetailModal
                      isOpen={controller.openDetail}
                      onClose={controller.handleOnClose}
                      name={val.name}
                    />
                  </>
                );
              })}
          </Box>
          <Center>
            <Divider orientation="vertical" color={"#d9d9d9"} />
          </Center>

          <Divider orientation="horizontal" color={"#d9d9d9"} />

          <Box width={"auto"}>
            <Container>
              <Stack spacing={6} direction={"row"} padding={"40px"}>
                <Box fontSize={"12px"} width={"2em"}>
                  Lets Start
                </Box>
                <Icon
                  icon="material-symbols:arrow-right-alt"
                  color="#d9d9d9"
                  width={"35px"}
                  height={"35px"}
                />
              </Stack>
            </Container>
          </Box>
        </Box>
      </Main>
    </>
  );
};

export default HomeIndex;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 30px 20px;
  > div.content {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border-radius: 5px;
    min-height: 400px;
    transition: 0.4s height ease;
  }
`;
