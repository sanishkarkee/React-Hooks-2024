import React, { useRef, useState } from 'react';

function RefComponent() {
  const refElement = useRef('');
  const [name, setName] = useState('Yoshita');

  console.log(refElement);

  const resetFunction = () => {
    setName((prev) => (prev = ''));
    refElement.current.focus();
    refElement.current.style.color = 'white';
    refElement.current.style.background = '#3b3b3b';
  };

  const handeInput = () => {
    refElement.current.style.color = 'black';
    refElement.current.style.background = 'yellow';
  };

  return (
    <>
      <h1>Learning useRef</h1>
      <input
        type='text'
        ref={refElement}
        value={name}
        onChange={(e) => {
          return setName(e.target.value);
        }}
      />

      <button onClick={resetFunction}>Reset</button>

      <button onClick={handeInput}>Hanlde Input</button>
    </>
  );
}

export default RefComponent;
