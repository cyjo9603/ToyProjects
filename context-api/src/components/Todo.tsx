import React, { FC, useCallback, useContext } from 'react';

import Context, { Todo } from '../store';
import { deleteTodoAction } from '../store/deleteTodo';

interface Props {
  todo: Todo;
}

const Todo: FC<Props> = ({ todo }) => {
  const { dispatch } = useContext(Context);

  const onClickDelete = useCallback(() => {
    dispatch(deleteTodoAction(todo.id));
  }, [todo.id]);

  return (
    <div>
      <span>
        {todo.id}:{todo.content}
      </span>
      <span onClick={onClickDelete}>❌</span>
    </div>
  );
};

export default Todo;
