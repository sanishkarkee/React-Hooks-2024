import { createContext, useState } from 'react';
import './App.css';
import CompA from './components/CompA';

export const NameContext = createContext();
export const channelContext = createContext();

function App() {
  const [count, setCount] = useState();

  return (
    <>
      <NameContext.Provider value={'Sanish'}>
        <channelContext.Provider value={count}>
          <CompA />
        </channelContext.Provider>
      </NameContext.Provider>
    </>
  );
}

export default App;
