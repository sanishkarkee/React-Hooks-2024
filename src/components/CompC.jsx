import React, { useContext } from 'react';
import { channelContext, NameContext } from '../App';

function CompC() {
  const myName = useContext(NameContext);
  const mychannelName = useContext(channelContext);

  return (
    <div>
      <h1>I am Component :</h1>
      <h1>{myName}</h1>
      <h1>{mychannelName}</h1>
    </div>
  );
}

export default CompC;
