import React, { FC } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import Home from './components/Home';
import Input from './components/Input';
import apollo from './apollo';

const App: FC = () => {
  return (
    <ApolloProvider client={apollo}>
      <Home />
      <Input />
    </ApolloProvider>
  );
};

export default App;
