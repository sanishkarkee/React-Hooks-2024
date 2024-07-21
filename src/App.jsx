import { useState } from 'react';
import './App.css';
import DataFetching from './components/DataFetching';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DataFetching />
    </>
  );
}

export default App;
