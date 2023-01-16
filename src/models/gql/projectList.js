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

// export const ADD_PROJECT = gql`
//   mutation (name: $String, picture: $String, icon: $String desc: $Text, link: $Text) {
//     insert_project(
//       objects: { name: $name, desc: $desc, link: $link, icon: $icon, picture: $picture }
//     ) {
//       returning {
//         name,
//         desc,
//         link,
//         icon,
//         picture
//       }
//     }
//   }
// `;
