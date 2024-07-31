import React, { useEffect, useRef } from 'react';

function HookuseRef() {
  const firstRef = useRef();
  const lastRef = useRef();

  useEffect(() => {
    console.log(firstRef);
    console.log(lastRef);

    firstRef.current.focus();
    firstRef.current.style.color = 'black';
    firstRef.current.style.background = 'yellow';
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Full Name = ', firstRef.current.value, lastRef.current.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>Enter First Name:</label>
        <input ref={firstRef} type='text' placeholder='First Name' />

        <br />
        <br />

        <label htmlFor=''>Enter Last Name:</label>
        <input ref={lastRef} type='text' placeholder='Last Name' />

        <br />
        <br />

        <input type='submit' value='Submit' />
      </form>
      {/* <h1 ref={newRef}>Learning never ends.</h1>
      <button onClick={handleHeading}>Click</button> */}
    </>
  );
}

export default HookuseRef;
