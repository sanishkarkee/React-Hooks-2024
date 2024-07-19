import React, { useEffect, useState } from 'react';

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('useEffect is running');
    document.title = `you clicked ${count} times.`;
  }, [count]);
  return (
    <>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((preValue) => preValue + 1)}>
        Click {count} times
      </button>
    </>
  );
}

export default HookCounterOne;
