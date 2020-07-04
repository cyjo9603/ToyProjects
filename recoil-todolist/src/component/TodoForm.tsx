import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { todoStore } from '../store/todo';

const TodoForm = () => {
  const setTodo = useSetRecoilState(todoStore);
  const [content, setContent] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTodo((todo) => {
      const id = todo.length ? todo[todo.length - 1].id + 1 : 0;
      return [...todo, { id, content }];
    });
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChangeContent} value={content} placeholder="내용" />
      <button type="submit">입력</button>
    </form>
  );
};

export default TodoForm;
