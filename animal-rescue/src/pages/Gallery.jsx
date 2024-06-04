import React from 'react';
import { useState, useEffect } from 'react';
import '../style/gallery.css'; 
import AnimalCount from '../components/AnimalCount';

const images = import.meta.glob('../assets/gallery_images/*.{png,jpg,jpeg,svg}');

const ImageGallery = () => {
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const importedImages = await Promise.all(
        Object.keys(images).map(async (path) => {
          const image = await images[path]();
          return image.default;
        })
      );
      setImagePaths(importedImages);
    };
    loadImages();
  }, []);

  // animal types and counts
  const animalData = [
    {
      type: 'Horses',
      count: 14
    },
    {
      type: 'Pigs',
      count: 26
    },
    {
      type: 'Alpacas',
      count: 4
    },
    {
      type: 'Donkeys',
      count: 3
    },
    {
      type: 'Goats',
      count: 8
    },
    {
      type: 'Sheep',
      count: 2
    },
    {
      type: 'Cows',
      count: 6
    },
    {
      type: 'Chickens',
      count: 12
    },
    {
      type: 'Cats',
      count: 8
    },
    {
      type: 'Dogs',
      count: 9
    }
  ];

  return (
    <>
      <h1 className="gallery-title">Our Home is Small but Mighty! We Are Currently Home to:</h1>
      <div className='count-container'>
        <AnimalCount animalData={animalData} />
      </div>
      <div className="gallery">
        {/* loop over the image paths */}
        {imagePaths.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} className="gallery-image" />
        ))}
      </div>
    </>
  );
};

export default ImageGallery;
