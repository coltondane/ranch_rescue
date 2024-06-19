// component to display the count of each animal type
import React from 'react';
import '../style/gallery.css';

function AnimalCount({ animalData }) {
  return (
    <div className="animal-count">
      {animalData.map((animal, index) => (
        <div key={index}>
          <h2>{animal.count} {animal.type}</h2>
        </div>
      ))}
    </div>
  );
}

export default AnimalCount;
