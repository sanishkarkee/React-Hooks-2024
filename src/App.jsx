import { useState } from 'react';
import './App.css';
import HookCounterThree from './components/HookCounterThree';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HookCounterThree />
    </>
  );
}

export default App;
