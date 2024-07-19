import { useState } from 'react';
import './App.css';
import HookCounterOne from './components/HookCounterOne';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HookCounterOne />
    </>
  );
}

export default App;
