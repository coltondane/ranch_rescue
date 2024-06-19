import React, { useState, useEffect, useRef } from 'react';
import '../style/gallery.css';
import AnimalCount from '../components/AnimalCount';

const images = import.meta.glob('../assets/gallery_images/*.{png,jpg,jpeg,svg}');

const ImageGallery = () => {
  const [imagePaths, setImagePaths] = useState([]);
  const [loading, setLoading] = useState(true);

  const observer = useRef(null);

  useEffect(() => {
    // Function to handle intersection changes
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = new Image();
          img.src = entry.target.dataset.src;
          img.onload = () => {
            entry.target.src = img.src;
            observer.current.unobserve(entry.target);
          };
        }
      });
    };

    // Initialize observer
    observer.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1  // Adjust as needed
    });

    // Observe all images
    document.querySelectorAll('.lazy-load').forEach((img) => {
      observer.current.observe(img);
    });

    // Preload all images initially
    const preloadImages = async () => {
      const importedImages = await Promise.all(
        Object.keys(images).map(async (path) => {
          const image = await images[path]();
          return image.default;
        })
      );
      setImagePaths(importedImages);
      setLoading(false); // Set loading state to false once images are preloaded
    };

    preloadImages();
  }, []);

  // Animal types and counts
  const animalData = [
    { type: 'Horses', count: 14 },
    { type: 'Pigs', count: 26 },
    { type: 'Alpacas', count: 4 },
    { type: 'Donkeys', count: 3 },
    { type: 'Goats', count: 8 },
    { type: 'Sheep', count: 2 },
    { type: 'Cows', count: 6 },
    { type: 'Chickens', count: 12 },
    { type: 'Cats', count: 8 },
    { type: 'Dogs', count: 9 }
  ];

  return (
    <>
      <h1 className="gallery-title">Our Home is Small but Mighty! We Are Currently Home to:</h1>
      <div className='count-container'>
        <AnimalCount animalData={animalData} />
      </div>
      <div className="gallery">
        {/* Render images with lazy-load class */}
        {imagePaths.map((path, index) => (
          <img
            key={index}
            data-src={path}
            src={loading ? '' : path} // Initially render empty src to defer loading
            alt={`Image ${index}`}
            className="gallery-image lazy-load"
          />
        ))}
      </div>
    </>
  );
};

export default ImageGallery;
