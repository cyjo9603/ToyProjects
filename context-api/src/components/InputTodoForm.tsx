import React, { FC, useState, useContext, useCallback } from 'react';

import Context from '../store';
import { addTodoAction } from '../store/addTodo';

const InputTodoForm: FC = () => {
  const [content, setContent] = useState('');
  const { dispatch } = useContext(Context);

  const onChangeContent = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }, []);

  const onClickButton = useCallback(() => {
    dispatch(addTodoAction(content));
    setContent('');
  }, [content]);

  return (
    <form>
      <input type="text" value={content} onChange={onChangeContent} />
      <button type="button" onClick={onClickButton}>
        입력
      </button>
    </form>
  );
};

export default InputTodoForm;
