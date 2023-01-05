import { gql } from "@apollo/client";

export const GET_PROJECT = gql`
  query {
    product {
      desc
      icon
      image
      name
      timeStamp
      product_id
      vote
    }
  }
`;

export const ADD_PROJECT = gql``;
