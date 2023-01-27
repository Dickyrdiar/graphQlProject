import { gql } from "@apollo/client";

export const GET_PROJECT = gql`
  query {
    Project(order_by: { di_project: asc_nulls_last }) {
      name
      icon
      desc
      di_project
      link
      picture
      timeStamps
    }
  }
`;

export const add_project = gql`
  mutation (
    $name: name!
    $desc: String!
    $link: name!
    $icon: character
    $picture: character
  ) {
    insert_Project(
      objects: {
        name: $name
        desc: $desc
        link: $link
        icon: $icon
        picture: $picture
      }
    ) {
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

export const get_project_by_id = gql`
  query MyQuery {
    Project(where: { di_project: { _eq: ID } }) {
      di_project
      name
      desc
      picture
      icon
      link
      timeStamps
    }
  }
`;
