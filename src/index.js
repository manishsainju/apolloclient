import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { cache } from "./cache";
import { typeDefs } from "./typeDefs";

const client = new ApolloClient({
  cache,
  uri: "https://4fzm1yoeji.execute-api.us-east-1.amazonaws.com/dev/",
  typeDefs,
  resolvers: {}
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
