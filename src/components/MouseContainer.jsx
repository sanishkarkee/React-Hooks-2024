import React, { useState } from 'react';
import HookMouse from './HookMouse';

function MouseContainer() {
  const [display, setdisplay] = useState(false);

  console.log(display);

  return (
    <>
      <button
        onClick={() => {
          setdisplay(!display);
        }}
      >
        Toggle Display
      </button>

      {display && <HookMouse />}

      {/* OR
      {display === true && <HookMouse />} */}
    </>
  );
}

export default MouseContainer;
