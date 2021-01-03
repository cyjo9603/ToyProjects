import { FC } from 'react';

import { Todo, deleteTodo } from '../store/todo';

interface Props {
  todo: Todo;
}

const TodoItem: FC<Props> = ({ todo }) => {
  const removeItem = () => {
    deleteTodo(todo.id);
  };

  return (
    <div>
      <input type="checkbox" />
      <span>{todo.content}</span>
      <span onClick={removeItem}> ❌</span>
    </div>
  );
};

export default TodoItem;
