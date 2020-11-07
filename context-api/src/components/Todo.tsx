import React, { FC } from 'react';

import { Todo } from '../store';

interface Props {
  todo: Todo;
}

const Todo: FC<Props> = ({ todo }) => (
  <div>
    {todo.id}:{todo.content}
  </div>
);

export default Todo;
