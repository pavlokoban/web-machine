import React from 'react';
import styles from './BrandSection.module.css';

interface Brand {
  name: string;
  image: string;
  flag: string;
  alt: string;
}

const brands: Brand[] = [
  { name: 'Дизайн и разработка сайта для крупнейшей китайской компании разработчиков игр для мобильных телефонов ZPLAY (Beijing)', image: '/images/brands/zplay_white.svg', flag: '🇨🇳', alt: 'Zplay' },
  { name: 'Настройка рекламной кампании в Baidu для подготовительного отделения университета Cambridge', image: '/images/brands/cambrige-logo.png', flag: '🇬🇧', alt: 'Cambrige' },
  { name: 'Дизайн, разработка и продвижение сайта для Carlass (Belron® Group)', image: '/images/brands/carglass.png', flag: '🇬🇧 🇺🇦', alt: 'Carglass Belron®' },
  { name: 'Дизайн и создание сайта бренда пиьевой воды Роганская', image: '/images/brands/roganskaya.png', flag: '🇺🇦', alt: 'Роганская вода' },
  { name: 'Дизайн и разработка интернет-магазина Procraft', image: '/images/brands/procraft.png', flag: '🇺🇦', alt: 'Разработка интернет-магазина Прокрафт' },
  
  { name: 'Дизайн, техподдержка и разработка разделов на сайте сети ОККО', image: '/images/brands/okko.png', flag: '🇺🇦', alt: 'АЗС Окко' },
  { name: 'Дизайн сайта для официального дилера Toyota (автосалон по продаже машин)', image: '/images/brands/toyota-dealer-logo.svg', flag: '🇯🇵 🇺🇦', alt: 'Toyota автоцентр Харьков' },
  { name: 'SEO продвижение и реклама интернет-магазина бренда Mida', image: '/images/brands/mida.png', flag: '🇺🇦', alt: 'Обувная фабрика Мида' },
  { name: 'Дизайн и создание сайта для дилера Hyundai Truck', image: '/images/brands/hyundai-truck-logo.svg', flag: '🇰🇷 🇺🇦', alt: 'Hyundai Truck дилер Украина' },
  { name: 'SEO продвижение дилера IKEA', image: '/images/brands/Ikea-logo.svg', flag: '🇳🇱 🇺🇦', alt: 'Интернет магазин украинского дилера IKEA' },

  { name: 'SEO продвижение VAHome', image: '/images/brands/vahome-logo.png', flag: '🇹🇷', alt: 'Продвижение турецкого бренда VAHome' },
  { name: 'Дизайн и разработка сайта компании MeridianNurse', image: '/images/brands/meridian-logo.png', flag: '🇺🇸', alt: 'MeridianNurse' },
  { name: 'Разработка и SEO продвижение интернет-магазина Luxel', image: '/images/brands/luxel-logo.svg', flag: '🇺🇦', alt: 'Интернет-магазин Luxel' },
  { name: 'Дизайн для интернет-магазина Lamps4makeup', image: '/images/brands/lamps4makeup-logo.png', flag: '🇪🇪', alt: 'Дизайн Интернет магазина Lamps4makeup' },
  { name: 'Настройка и проведение рекламных кампаний для ТЕРРА', image: '/images/brands/terra-logo.png', flag: '🇺🇦', alt: 'Реклама компании Терра' },
  
  // Add more brands as needed
];

const BrandSectionRu: React.FC = () => {
  return (
    <div className={styles.brandSection}>
      {brands.map((brand, index) => (
        <div key={index} className={styles.brand}>
          <div className={styles.flag}>{brand.flag}</div>
          <div className={styles.imageCont}>
          <img src={brand.image} alt={brand.alt} className={styles.logo} />
          </div>
          <div className={styles.name}>{brand.name}</div>
        </div>
      ))}
    </div>
  );
};

export default BrandSectionRu;
