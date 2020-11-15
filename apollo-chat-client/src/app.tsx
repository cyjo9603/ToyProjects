import React, { FC } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import Home from './components/Home';
import apollo from './apollo';

const App: FC = () => {
  return (
    <ApolloProvider client={apollo}>
      <Home />
    </ApolloProvider>
  );
};

export default App;
