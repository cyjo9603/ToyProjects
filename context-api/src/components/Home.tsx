import React, { FC, useContext } from 'react';

import Context from '../store';
import InputTodoForm from './InputTodoForm';
import Todo from './Todo';

const Home: FC = () => {
  const { todos } = useContext(Context);
  return (
    <section>
      <InputTodoForm />
      {todos.map((todo) => (
        <Todo todo={todo} key={`todo_${todo.id}`} />
      ))}
    </section>
  );
};

export default Home;
