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
      timeStamps
      comment_project {
        id_comment
        comment
      }
    }
  }
`;

export const add_project = gql`
  mutation (
    $name: name
    $desc: String
    $link: name
    $icon: name
    $picture: name
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
