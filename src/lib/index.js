/* eslint-disable no-undef */
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://equal-gnu-35.hasura.app/v1/graphql",
    headers: {
      // Authorization: `bearer ${process.env.AUTH_TOKEN}`,
      "Content-Type": "application/json",
      "x-hasura-admin-secret":
        "7eNlOob6mqA4MOqXEN2OkxfkJF2NeiwmGZDRjCiU8SLMgot0ww1wUMAIrO10YxU9",
    },
  }),
  // uri: process.env.GRAPQL_API,
  // headers: {
  //   "Content-Type": "application/json",
  //   "x-hasura-admin-secret": process.env.AUTH_TOKEN,
  // },
  cache: new InMemoryCache(),
});

export default client;
