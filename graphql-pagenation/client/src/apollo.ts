import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const URI = 'http://localhost:4000';

const link = createHttpLink({
  uri: `${URI}/graphql`,
  credentials: 'include',
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

export default client;
