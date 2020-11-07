import React, { FC, useReducer, useMemo } from 'react';
import Context, { reducer, initialState } from './store';

import Home from './components/Home';

const App: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, todos } = state;
  const value = useMemo(() => ({ count, todos, dispatch }), [count, todos]);
  return (
    <Context.Provider value={value}>
      <Home />
    </Context.Provider>
  );
};

export default App;
