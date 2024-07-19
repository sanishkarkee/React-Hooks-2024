import { useState } from 'react';
import './App.css';
import HookMouse from './components/HookMouse';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HookMouse />
    </>
  );
}

export default App;
