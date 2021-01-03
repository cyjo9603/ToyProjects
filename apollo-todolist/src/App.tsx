import { FC } from 'react';
import { ApolloProvider } from '@apollo/client';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import apollo from './apollo';

const App: FC = () => (
  <ApolloProvider client={apollo}>
    <TodoForm />
    <TodoList />
  </ApolloProvider>
);

export default App;
