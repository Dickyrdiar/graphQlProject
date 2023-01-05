/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Container, Divider, Flex, Stack, Center } from "@chakra-ui/react";
import styled from "styled-components";
import ProductCard from "../../components/ProductList/card";
import DetailModal from "../../components/ModalDetail";
import ControllerHome from "../../controller/home.controller";

const HomeIndex = () => {
  const controller = ControllerHome();

  console.log(
    "response",
    controller.responseDate?.product?.map((val) => val.name)
  );

  return (
    <>
      <Main>
        <Box width={"75%"} display={"flex"} justifyContent={"space-between"}>
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
                        // onClick={controller.handleClick}
                        // vote={val.vote}
                        // commentCount={val.comment}
                      />
                    </Container>
                  </>
                );
              })}
          </Box>
          <DetailModal isOpen={controller.openDetail} />
          <Center>
            <Divider orientation="vertical" color={"#d9d9d9"} />
          </Center>

          <Box padding={"40px"}>Blog</Box>
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

const dataProduct = [
  {
    id: 1,
    title: "Github",
    desc: "save project to cloud",
    vote: 100,
    // comment: "12",
  },

  {
    id: 2,
    title: "Figma",
    desc: "create protottype",
    vote: "70",
  },

  {
    id: 3,
    title: "Hasura",
    desc: "create database with graphql",
    vote: 60,
  },

  {
    id: 4,
    title: "VsCode",
    desc: "Code editor",
    vote: 99,
  },
];
