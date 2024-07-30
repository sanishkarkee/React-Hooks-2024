import React, { useRef, useState } from 'react';

function UseRef() {
  const [myNum, setMyNum] = useState(0);
  const inputOne = useRef();
  const inputTwo = useRef();

  const getNumBox = () => {
    console.log('Hello');
    inputOne.current.style.width = '400px';
  };

  const getTextBox = () => {
    console.log('World');
  };

  return (
    <>
      <h2>Learn Code Online</h2>
      <input
        type='number'
        style={{ width: '100px' }}
        ref={inputOne}
        value={myNum}
        onChange={(e) => setMyNum(e.target.value)}
      />
      <input
        type='text'
        ref={inputTwo}
        value={myNum}
        onChange={(e) => {
          return setMyNum(e.target.value);
        }}
      />
      <h3>Value is: {myNum}</h3>
      <button onClick={() => getNumBox()}>Rupees</button>{' '}
      {/* OR     <button onClick={getNumBox}>Rupees</button> */}
      <button onClick={() => getTextBox()}>Dollars</button>
    </>
  );
}

export default UseRef;
