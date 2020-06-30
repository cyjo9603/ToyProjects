import React, { useState } from 'react';
import useStore from '../useStore';

const TodoForm = () => {
  const { todo } = useStore();
  const [content, setContent] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    todo.addTodo(content);
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
