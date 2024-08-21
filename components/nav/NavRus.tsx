'use client';

import React, { useState, useEffect } from 'react';
import DiscussButtonRu from '../buttonletstalk/ButtonLetsTalkRu';
import styles from './Nav.module.css';

const NavRus: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  

  return (
    <>
      <button 
        onClick={handleClick} 
        className={`${styles.burgerButton} ${isOpen ? styles.open : ''}`}
      >
        {isOpen ? (
          <span className={styles.closeIcon}>&times;</span>
        ) : (
          <>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
          </>
        )}
      </button>

      
<div className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
  <div className={styles.menuContainer}>
    <div className={styles.menuColumns}>
      <div className={styles.menuColumn}>
        <h2>Услуги</h2>
        <ul style={{fontSize: '10px'}}>
          <li><a href="#">Веб-дизайн</a></li>
          <li><a href="#">Разработка сайтов</a></li>
          <li><a href="#">Разработка интернет магазинов</a></li>
          <li><a href="#">Разработка маркетплейсов, аукционов</a></li>
          <li><a href="#">Продвижение сайтов</a></li>
          <li><a href="#">Интернет-реклама</a></li>
        </ul>
      </div>
      <div className={styles.menuColumn}>
        <ul>
          <li><a href="#">Кейсы</a></li>
          <li><a href="#">Компания</a></li>
          <li><a href="#">Отзывы</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
        <p>Email: hello@web-machine.rocks</p>
        <DiscussButtonRu />
      </div>
    </div>
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
      <div className={styles.languages}>
      <a href="/en/">EN</a>
      <a href="/ru/">RU</a>
      <a href="/uk/">UA</a>
      <a href="/zh/">ZH</a>
    </div>
    <div className={styles.socialLinks}>
      <a href="#">LinkedIn</a>
      <a href="#">Facebook</a>
      <a href="#">Instagram</a>
      <a href="#">Clutch</a>
      <a href="#">Behance</a>
    </div>
      </div>
    </div>
  </div>
</div>

 


    </>
  );
};

export default NavRus;
