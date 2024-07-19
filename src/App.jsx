import { useState } from 'react';
import './App.css';
import HookCounterFour from './components/HookCounterFour';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HookCounterFour />
    </>
  );
}

export default App;
