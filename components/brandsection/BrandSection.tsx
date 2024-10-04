import React from 'react';
import styles from './BrandSection.module.css';
import Image from 'next/image';

interface Brand {
  name: string;
  image: string;
  flag: string;
  alt: string;
}

const brands: Brand[] = [
  { name: 'Design and website development for International mobile game developer Zplay', image: '/images/brands/zplay_white.svg', flag: '🇨🇳', alt: 'Zplay' },
  { name: 'Advertising campaign in Baidu for the Cambridge University Preparatory Department', image: '/images/brands/cambrige-logo.png', flag: '🇬🇧', alt: 'Cambrige' },
  { name: 'Carlass is Ukrainian part of Belron® Group, leading vehicle glass repair and replacement company', image: '/images/brands/carglass.png', flag: '🇬🇧', alt: 'Carglass' },
  { name: 'Brand 4', image: '/images/brands/roganskaya.png', flag: '🇺🇸', alt: 'Brand 4' },
  { name: 'Brand 5', image: '/images/brands/procraft.png', flag: '🇨🇳', alt: 'Brand 5' },
  { name: 'Brand 6', image: '/images/brands/okko.png', flag: '🇺🇦', alt: 'Brand 6' },
  { name: 'Brand 7', image: '/images/brands/mida.png', flag: '🇺🇦', alt: 'Brand 6' },
  // Add more brands as needed
];

const BrandSection: React.FC = () => {
  return (
    <div className={styles.brandSection}>
      {brands.map((brand, index) => (
        <div key={index} className={styles.brand}>
          <div className={styles.flag}>{brand.flag}</div>
          <div className={styles.imageCont}>
          <Image width={180} height={50} src={brand.image} alt={brand.alt} className={styles.logo} />
          </div>
          <div className={styles.name}>{brand.name}</div>
        </div>
      ))}
    </div>
  );
};

export default BrandSection;
