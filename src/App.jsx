import { useState } from 'react';
import './App.css';
import IntervalHookCounter from './components/IntervalHookCounter';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <IntervalHookCounter />
    </>
  );
}

export default App;
