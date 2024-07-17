'use client';

import React from 'react';

const images = [
  '/images/kyiv-fest.svg',
  '/path/to/image2.jpg',
  '/path/to/image3.jpg',
  '/path/to/image4.jpg',
  '/path/to/image5.jpg',
  '/path/to/image6.jpg'
];

const ImageRow = () => {
  return (
    <div className="image-row">
      {images.map((src, index) => (
        <div key={index} className="image-container" style={{ animationDelay: `${index * 0.8}s` }}>
          <img src={src} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default ImageRow;
