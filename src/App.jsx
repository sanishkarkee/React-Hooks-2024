import { useState } from 'react';
import './App.css';
import HookCounterTwo from './components/HookCounterTwo';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HookCounterTwo />
    </>
  );
}

export default App;
