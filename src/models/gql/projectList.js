import { gql } from "@apollo/client";

export const GET_PROJECT = gql`
  query {
    Project {
      name
      icon
      desc
      di_project
      link
      picture
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation ($name: String!, $desc: String!, $icon: String!, $image: String!) {
    insert_project(
      objects: { name: $name, desc: $desc, icon: $icon, image: $image }
    ) {
      returning {
        name
        desc
        icon
        image
      }
    }
  }
`;
