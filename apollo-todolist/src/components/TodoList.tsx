import { FC } from 'react';
import { useReactiveVar } from '@apollo/client';

import todoVar from '../store/todo';
import TodoItem from './TodoItem';

const TodoList: FC = () => {
  const todos = useReactiveVar(todoVar);

  return (
    <section>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={`todo_${todo.id}`} />
      ))}
    </section>
  );
};

export default TodoList;
