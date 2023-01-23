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
  mutation ($name: String, $desc: String, $link: String) {
    insert_Project(objects: { name: $name, desc: $desc, link: $link }) {
      returning {
        di_project
        name
        link
        picture
        icon
        picture
      }
    }
  }
`;
