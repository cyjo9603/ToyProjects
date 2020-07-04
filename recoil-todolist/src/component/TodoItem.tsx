import React from 'react';
import { useSetRecoilState } from 'recoil';

import { Todo, todoStore } from '../store/todo';

interface Props {
  data: Todo;
}

const TodoItem = ({ data }: Props) => {
  const setTodo = useSetRecoilState(todoStore);

  const removeItem = () => {
    setTodo((todo) => {
      const newTodo = [...todo];
      const index = todo.findIndex((v) => v.id === data.id);
      if (index !== -1) {
        newTodo.splice(index, 1);
      }
      return newTodo;
    });
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
