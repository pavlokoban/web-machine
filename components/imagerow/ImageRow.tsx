'use client';

import React from 'react';
import Image from 'next/image';

const images = [
  '/images/typescript-logo.svg',
  '/images/next-js-logo.svg',
  '/images/logo-react.svg',
  '/images/node-js.svg',
  '/images/postgresql-logo.svg',
  '/images/wordpress-logo.svg',
  '/images/opencart-logo.svg',
  '/images/laravel-logo.svg',
];

const ImageRow = () => {
  return (
    <div className="image-row">
      {images.map((src, index) => (
        <div key={index} className="image-container" style={{ animationDelay: `${index * 0.8}s` }}>
          <Image width={150} height={150} src={src} alt={`Stack ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default ImageRow;
