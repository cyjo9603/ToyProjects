import React from 'react';
import { AppProps } from 'next/app';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'node-fetch';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  fetch: fetch,
});

interface Props {
  Component: AppProps['Component'];
}

const App = ({ Component }: Props) => (
  <ApolloProvider client={client}>
    <Component />
  </ApolloProvider>
);

export default App;
