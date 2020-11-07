import React, { FC, useState, useContext, useCallback, useRef, FormEvent } from 'react';

import Context from '../store';
import { addTodoAction } from '../store/addTodo';

const InputTodoForm: FC = () => {
  const [content, setContent] = useState('');
  const { dispatch } = useContext(Context);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeContent = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      dispatch(addTodoAction(content));
      setContent('');

      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
    [content, inputRef.current]
  );

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={content} onChange={onChangeContent} ref={inputRef} />
      <button type="submit">입력</button>
    </form>
  );
};

export default InputTodoForm;
