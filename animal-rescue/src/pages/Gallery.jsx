import React from 'react';
import '../style/gallery.css'; 

// images 
import lilyImg from '../assets/lily.jpg';
import pigletImg from '../assets/piglet.jpeg';
import colt from '../assets/colt.jpeg';
import pig2 from '../assets/pig2.jpeg';
import turtle from '../assets/turtle.jpeg';
import rescue1 from '../assets/rescue1.jpeg';
import piglets from '../assets/piglets.jpeg';
import bigPig from '../assets/hugepig.jpeg';
import brownHorse from '../assets/horse2.jpeg';
import donkey2 from '../assets/donkey2.jpeg';

const ImageGallery = () => {

  // animal types and counts
  const animals = [
    {
      type: 'Horses',
      count: 2
    },
    {
      type: 'Pigs',
      count: 3
    },
    {
      type: 'Turtles',
      count: 1
    },
    {
      type: 'Donkeys',
      count: 1
    },
    {
      type: 'Piglets',
      count: 2
    },
    {
      type: 'Colts',
      count: 1
    }
  ];
  // Array of image paths
  const images = [
    lilyImg,
    pigletImg,
    colt,
    pig2,
    turtle,
    rescue1,
    piglets,
    bigPig,
    brownHorse,
    donkey2
  ];

  return (
    <>
      <h1 className="gallery-title">Our Home is Small but Mighty!</h1>
      <p>
        We are currently home to:
      </p>
      <div className="gallery">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} className="gallery-image" />
        ))}
      </div>
    </>
  );
};

export default ImageGallery;
