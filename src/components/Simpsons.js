// src/components/Displayprops.js
import React from 'react';
  


function Simpsons({ props }) {
  return (
    <div className="theSimpsons">
      <h1>Simpsons Quotes</h1>
      <p>Reload for another quote!</p>
      <p>{props.character}</p>
      <img
        src={props.image}
        alt={props.character}
      />
        <p>{props.quote}</p>
    </div>
  );
};
 
export default Simpsons;