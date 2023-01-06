/* eslint-disable no-undef */
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const headers = {
  "Content-Type": "application/json",
  "x-hasura-admin-secret":
    "7eNlOob6mqA4MOqXEN2OkxfkJF2NeiwmGZDRjCiU8SLMgot0ww1wUMAIrO10YxU9",
};

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://equal-gnu-35.hasura.app/v1/graphql",
    headers: headers,
  }),
  cache: new InMemoryCache(),
});

export default client;
