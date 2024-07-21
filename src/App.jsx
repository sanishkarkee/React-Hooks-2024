import { useState } from 'react';
import './App.css';
import MouseContainer from './components/MouseContainer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MouseContainer />
    </>
  );
}

export default App;
