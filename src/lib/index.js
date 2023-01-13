/* eslint-disable no-undef */
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const headers = {
  "Content-Type": "application/json",
  "x-hasura-admin-secret":
    "mjsbZknp9o9VDVYKSxQz68vJ4d3YLW4WKW7pSOhQimGBfyaQgQ7RzXBmIoSqDeIH",
};

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://smiling-deer-66.hasura.app/v1/graphql",
    headers: headers,
  }),
  cache: new InMemoryCache(),
});

export default client;
