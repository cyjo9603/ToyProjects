import React from 'react';

import useStore from '../useStore';
import { TodoData } from '../stores/todo';

interface Props {
  data: TodoData;
}

const TodoItem = ({ data }: Props) => {
  const { todo } = useStore();

  const removeItem = () => {
    todo.removeTodo(data.id);
  };

  return (
    <div>
      <input type="checkbox" />
      <span>{data.content}</span>
      <span onClick={removeItem}>❌</span>
    </div>
  );
};

export default TodoItem;
