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

export const add_project = gql`
  mutation ($name: String, $desc: String, $url: String) {
    Project(objects: { name: $name, desc: $desc, url: $url }) {
      returning {
        di_project
        name
        desc
        url
        icon
        image
      }
    }
  }
`;
