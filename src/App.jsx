import { createContext, useState } from 'react';
import './App.css';
import RefComponent from './components/RefComponent';

export const NameContext = createContext();
export const channelContext = createContext();
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RefComponent />
    </>
  );
}

export default App;
