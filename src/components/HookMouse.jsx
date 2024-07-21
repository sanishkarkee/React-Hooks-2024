// ---- Run Effect only once using empty dependency i.e,  []

import React, { useEffect, useState } from 'react';

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
    // console.log(e);
  };

  useEffect(() => {
    console.log('useEffect called');
    window.addEventListener('mousemove', logMousePosition);

    return () => {
      console.log('component unmounting / useEffect residue cleanup');
      window.removeEventListener('mousemove', logMousePosition);
    };
  }, []);

  return (
    <>
      <h4>X - coordinate is: {x}</h4>
      <h4>Y - coordinate is: {y}</h4>
    </>
  );
}

export default HookMouse;
