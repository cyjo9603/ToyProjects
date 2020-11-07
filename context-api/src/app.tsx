import React, { FC, useReducer, useMemo } from 'react';
import Context, { reducer, initialState } from './store';

const App: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, todos } = state;
  const value = useMemo(() => ({ count, todos, dispatch }), [count, todos]);
  return <Context.Provider value={value}></Context.Provider>;
};

export default App;
