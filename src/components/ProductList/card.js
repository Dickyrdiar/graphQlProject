/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { Box } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const ProductCard = ({
  key,
  title,
  desc,
  onClick,
  onClickVote,
  vote,
  commentCount,
  image,
}) => {
  return (
    <>
      <Main>
        <CardWrapper>
          <Card key={key} onClick={onClick}>
            <div className="icon">
              <img src={image} alt="icon" />
            </div>

            <Box
              textAlign={"start"}
              // mt={"50px"}
              style={{
                margin: "auto",
                width: "50%",
                padding: "15px",
                marginTop: "50px",
              }}
            >
              <CardLabel>{title}</CardLabel>
              <CardDesc>{desc}</CardDesc>

              <Box mt={"8px"} display={"flex"}>
                <Icon
                  icon="material-symbols:mode-comment"
                  color=" #2b2f3c"
                  width="14"
                  height="14"
                />
                <commentCount>{commentCount}</commentCount>
              </Box>
            </Box>

            <div className="vote" onClick={onClickVote}>
              <Icon icon="ic:outline-arrow-drop-up" width="40" height="40" />
              <p className="totalVote">{vote}</p>
            </div>
          </Card>
        </CardWrapper>
      </Main>
    </>
  );
};

export default ProductCard;

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

const CardWrapper = styled.div`
  > div {
    background-color: #fff;
    border-radius: 10px;
    grid-template-columns: 1fr 6fr 1fr;
    /* box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2); */
    /* display: flex; */
    max-width: 100%;
    margin: 20px;
    overflow: hidden;
    width: 800px;
  }
`;

const CardLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: "#21293b";
  margin-top: -3.7em;
  /* text-align: right; */
  text-align: left;
`;

const CardDesc = styled.div`
  font-size: 13px;
  font-weight: 120;
  color: #2b2f3c;
  /* background-color: red; */
  /* margin-left: -70px; */
  text-align: left;
`;

const commentCount = styled.div`
  font-size: 9px;
  font-weight: 120;
  color: #2b2f3c;
  /* background-color: red; */
  /* margin-left: -70px; */
  text-align: left;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  /* border: 1px solid #E6EAF3; */
  justify-content: space-between;
  box-shadow: 0px 3px 10px rgba(188, 200, 231, 0.2);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  height: 150px;
  padding: 0 30px;
  gap: 20px;
  :hover {
    border: 1px solid #f85964;
    box-shadow: 0px 8px 10px rgba(188, 200, 231, 0.5);
  }
  > div.label {
    font-size: 14px;
    font-weight: 600;
    color: gray;
    margin-top: -3.7em;
  }
  > div.icon {
    display: flex;
    width: 80px;
    height: 80px;
    align-items: center;
    justify-content: start;
    margin-top: -0.5em;

    > img {
      width: 80px;
      height: 80px;
      border-radius: 4px;
    }
  }
  transition: 0.3s border ease;
  transition: box-shadow 0.3s ease;

  > div.vote {
    background: #ffffff;
    border: 1px solid #e6eaf3;
    box-shadow: 0px 3px 10px rgba(188, 200, 231, 0.2);
    border-radius: 8px;
    height: 70px;
    padding: 0 30px;
    align-items: center;
    cursor: pointer;
    > p.totalVote {
      text-align: center;
      align-items: center;
    }
  }
`;
