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
  LinkBox,
  LinkOverlay,
  Image,
} from "@chakra-ui/react";
import styled from "styled-components";
import ProductCard from "../../components/ProductList/card";
import DetailModal from "../../components/ModalDetail";
import ControllerHome from "../../controller/home.controller";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
// import Header from "./components/Header";
import Header from "../../components/Header";
import { DataBlog } from "./dataBlog";

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
      <Header isLogin />
      <Main>
        <Box
          width={"99%"}
          // backgroundColor={"GrayText"}
          display={"flex"}
          // justifyContent={"space-around"}
        >
          <Box width={"80%"}>
            {controller.responseDate?.product &&
              controller.responseDate?.product?.map((val) => {
                return (
                  <>
                    <Container maxW={"8xl"} as={Stack} spacing={12}>
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

          <Box width={"100%"}>
            <Container maxW={"5xl"}>
              <Divider orientation="horizontal" color={"#2b2f3c"} />
              <Stack spacing={4} direction={"row"} padding={"40px"}>
                <Box
                  style={{
                    fontSize: "14px",
                    color: "gray",
                  }}
                  maxW={"40"}
                  color={"gray.800"}
                  marginTop={"3px"}
                >
                  <Link>Lates Story</Link>
                </Box>
                <Icon
                  icon="material-symbols:arrow-right-alt"
                  color="#d9d9d9"
                  width={"30px"}
                  height={"30px"}
                />
              </Stack>

              <Box>
                <Stack direction={"column"} spacing={"5"}>
                  <Box>
                    {DataBlog &&
                      DataBlog.map((val) => {
                        return (
                          <>
                            <Stack
                              spacing={3}
                              direction={"row"}
                              maxW={"2xl"}
                              padding={"40px"}
                              // display={"flex"}
                              // justifyContent={"space-around"}
                            >
                              <Box
                                style={{
                                  fontSize: "12px",
                                  color: "gray",
                                  marginTop: "-15px",
                                }}
                                width={"30em"}
                                key={val.id}
                              >
                                {val.title}

                                <Box
                                  style={{
                                    fontSize: "13px",
                                    fontWeight: "120",
                                    color: " #2b2f3c",
                                  }}
                                >
                                  time
                                </Box>
                              </Box>

                              <Box>
                                <Image
                                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                  alt="Green double couch with wooden legs"
                                  width={"90px"}
                                  height={"50px"}
                                  padding={"-4px"}
                                  margin={"-20px"}
                                  borderRadius="sm"
                                />
                              </Box>
                            </Stack>
                          </>
                        );
                      })}
                  </Box>
                </Stack>
              </Box>
            </Container>
          </Box>
        </Box>
      </Main>
    </>
  );
};

export default HomeIndex;

const Main = styled.div`
  /* display: flex; */
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
