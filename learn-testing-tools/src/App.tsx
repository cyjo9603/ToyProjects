import React, { useState, useCallback } from 'react';
import './App.css';

import Counter from './components/Conuter';
import NameList from './components/NameList';
import NameForm from './components/NameForm';

function App() {
  const [names, setNames] = useState<string[]>([]);

  const insertName = useCallback((name) => {
    setNames((prev) => [...prev, name]);
  }, []);

  return (
    <div>
      <Counter />
      <hr />
      <h1>이름 목록</h1>
      <NameForm insertName={insertName} />
      <NameList names={names} />
    </div>
  );
}

export default App;
