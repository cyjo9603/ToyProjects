import React, { useState, useCallback } from 'react';

interface Props {
  insertName: (name: string) => void;
}

const NameForm = ({ insertName }: Props) => {
  const [name, setName] = useState('');

  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      insertName(name);
      setName('');
    },
    [name],
  );
  return (
    <form onSubmit={onSubmit}>
      <label>이름</label>
      <input type="text" value={name} onChange={onChangeName} />
      <button type="submit">등록</button>
    </form>
  );
};

export default NameForm;
