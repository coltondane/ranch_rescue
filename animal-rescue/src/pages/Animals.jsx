// AdoptableAnimalsPage.js
import React from 'react';
import AnimalCard from '../components/AnimalCard';

import '../style/animals.css';

function DisplayAnimals() {
       const animals = [
        {
            id: 1,
            name: 'Lily',
            image: 'lily.jpg',
            description: 'Lily is a miniature pony-donkey cross who was rescued from a feedlot as a filly. She is full of spice and after spending her first few years with us at our rescue, she has lovingly found her forever home with a family in Colorado.'
        },
        {
            id: 2,
            name: 'Piglet',
            image: 'piglet.jpg',
            description: 'Piglet is a pig who was rescued from a factory farm'
        },
        {
            id: 3,
            name: 'Horse',
            image: 'horse.jpg',
            description: 'This horse was rescued from a slaughterhouse'
        },
        {
            id: 4,
            name: 'Donkey',
            image: 'donkey.jpg',
            description: 'This donkey was rescued from a feedlot'
        },
        {
            id: 5,
            name: 'Pony',
            image: 'pony.jpg',
            description: 'This pony was rescued from a factory farm'
        },
        {
            id: 6,
            name: 'Cow',
            image: 'cow.jpg',
            description: 'This cow was rescued from a dairy farm and is now living out their days at Lily\'s Ranch and Rescue'
        }
    ];
    // map over the animals array to create an AnimalCard for each animal
    return (
        <div className='animal-container'>
          <h1>Lily's Success Stories</h1>
          <div className='form-element'>
            {animals.map(animal => (
                <AnimalCard key={animal.id} name={animal.name} image={animal.image} description={animal.description} />
            ))}
          </div>
        </div>
    );
}

export default DisplayAnimals;
