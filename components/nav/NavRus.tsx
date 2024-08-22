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
        <ul>
          <li><a className="p-1 a-anim-w" href="#">Веб-дизайн</a></li>
          <li><a className="p-1 a-anim-w" href="#">Разработка сайтов</a></li>
          <li><a className="p-1 a-anim-w" href="#">Разработка интернет магазинов</a></li>
          <li><a className="p-1 a-anim-w" href="#">Разработка маркетплейсов, аукционов</a></li>
          <li><a className="p-1 a-anim-w" href="#">Продвижение сайтов</a></li>
          <li><a className="p-1 a-anim-w" href="#">Интернет-реклама</a></li>
        </ul>
      </div>
      <div className={styles.menuColumn}>
        <div className={styles.marginDescFor2Col}>
        <ul>
          <li><a className="p-1 a-anim-w text-xl font-bold" href="#">Кейсы</a></li>
          <li><a className="p-1 a-anim-w text-xl font-bold" href="#">Компания</a></li>
          <li><a className="p-1 a-anim-w text-xl font-bold" href="#">Отзывы</a></li>
          <li><a className="p-1 a-anim-w text-xl font-bold" href="#">Контакты</a></li>
        </ul>
        <br></br>
        <p><a className="p-1 a-anim-w" href="mailto:hello@web-machine.rocks">Email: hello@web-machine.rocks</a></p>
        <DiscussButtonRu />
      </div>
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
