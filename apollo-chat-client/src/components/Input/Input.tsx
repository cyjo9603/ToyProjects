import React, { FC, useCallback, useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import { ADD_CHAT } from '../../queries/chat.queries';

const Input: FC = () => {
  const [addChatMutation] = useMutation(ADD_CHAT);
  const [writer, setWriter] = useState('');
  const [description, setDescription] = useState('');

  const onChangeWriter = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setWriter(e.target.value);
    },
    []
  );
  const onChangeDescription = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDescription(e.target.value);
    },
    []
  );

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      addChatMutation({
        variables: {
          writer,
          description,
        },
      });
    },
    [writer, description]
  );

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={writer}
        onChange={onChangeWriter}
        placeholder="작성자"
      />
      <input
        type="text"
        value={description}
        onChange={onChangeDescription}
        placeholder="내용"
      />
      <button>입력</button>
    </form>
  );
};

export default Input;
