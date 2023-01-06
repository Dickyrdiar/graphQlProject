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
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation ($name: String!, $desc: String!, $icon: String!) {
    insert_project(objects: { name: $name, desc: $desc, icon: $icon }) {
      returning {
        name
        desc
        icon
      }
    }
  }
`;
