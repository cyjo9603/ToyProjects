import { ApolloProvider } from '@apollo/client';

import Feeds from './components/Feeds';
import client from './apollo';

const App = () => (
  <ApolloProvider client={client}>
    <Feeds />
  </ApolloProvider>
);

export default App;
