// src/components/Displaycharacter.js
import React from 'react';
  


function Simpsons({ character }) {
  return (
    <div className="theSimpsons">
      <h1>Simpsons Quotes</h1>
      <p>Reload for another quote!</p>
      <p>{character.character}</p>
      <img
        src={character.image}
        alt={character.character}
      />
        <p>{character.quote}</p>
    </div>
  );
};
 
export default Simpsons;