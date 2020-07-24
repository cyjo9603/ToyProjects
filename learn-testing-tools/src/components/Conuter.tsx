import React, { useState, useCallback } from 'react';

const Counter = () => {
  const [value, setValue] = useState(1);

  const onIncrease = useCallback(() => {
    setValue(value + 1);
  }, [value]);
  const onDecrease = useCallback(() => {
    setValue(value - 1);
  }, [value]);

  return (
    <div>
      <h1>카운터</h1>
      <h2>{value}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default Counter;
