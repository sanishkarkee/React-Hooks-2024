import React, { useEffect, useState } from 'react';

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((preValue) => preValue + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      console.log('useEffect return');
      clearInterval(interval);
    };
  }, []);

  return <>{count}</>;
}

export default IntervalHookCounter;
