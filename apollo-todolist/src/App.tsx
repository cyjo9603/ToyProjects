import { FC } from 'react';
import { ApolloProvider } from '@apollo/client';

import apollo from './apollo';

const App: FC = () => (
  <ApolloProvider client={apollo}>
    <></>
  </ApolloProvider>
);

export default App;
