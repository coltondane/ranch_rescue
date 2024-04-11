// AdoptableAnimalsPage.js
import React from 'react';
import AnimalCard from '../components/AnimalCard';

import lilyImg from '../assets/lily.jpg';
import pigletImg from '../assets/piglet.jpeg';
import placeHolderImg from '../assets/pony.png';

import '../style/animals.css';

function DisplayAnimals() {
       const animals = [
        {
            id: 1,
            name: 'Lily',
            image: lilyImg,
            description: 'Lily is a miniature pony-donkey cross who was rescued from a feedlot as a filly. She is full of spice and after spending her first few years with us at our rescue, she has lovingly found her forever home with a family in Colorado.The rest of this is gibberish to test the overflow of the text. Lily is a miniature pony-donkey cross who was rescued from a feedlot as a filly. She is full of spice and after spending her first few years with us at our rescue, she has lovingly found her forever home with a family in Colorado. blah blah blah keep going. talk about how she inspired Laurie to blah blah blah. Rehoming animals allows us to intake new rescues, and those who cannot find a home due to health conditions or other complications will always have a safe, forever home here at Lily\'s Ranch and Rescue.'
        },
        {
            id: 2,
            name: 'Piglet',
            image: pigletImg,
            description: 'Piglet is a pig who was rescued from a factory farm'
        },
        {
            id: 3,
            name: 'Horse',
            image: placeHolderImg,
            description: 'This horse was rescued from a slaughterhouse'
        },
        {
            id: 4,
            name: 'Donkey',
            image: placeHolderImg,
            description: 'This donkey was rescued from a feedlot'
        },
        {
            id: 5,
            name: 'Pony',
            image: placeHolderImg,
            description: 'This pony was rescued from a factory farm'
        },
        {
            id: 6,
            name: 'Cow',
            image: placeHolderImg,
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
