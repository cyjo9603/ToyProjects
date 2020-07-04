import React from 'react';
import { RecoilRoot } from 'recoil';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  return (
    <RecoilRoot>
      <TodoForm />
      <TodoList />
    </RecoilRoot>
  );
};

export default App;
