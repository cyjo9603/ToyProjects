import React from 'react';
import { useObserver } from 'mobx-react';

import useStore from '../useStore';
import TodoItem from './TodoItem';

const TodoList = () => {
  const {
    todo: { todoData },
  } = useStore();

  return useObserver(() => (
    <section>
      {todoData.map((v) => (
        <TodoItem data={v} key={`todoData_${v.id}`} />
      ))}
    </section>
  ));
};

export default TodoList;
