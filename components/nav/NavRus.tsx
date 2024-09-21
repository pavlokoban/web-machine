'use client';

import React, { useState, useEffect } from 'react';
import ButtonLetsTalk from '@/components/buttonletstalk/ButtonLetsTalk';
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
        <h2><a className="p-1 a-anim-w text-xl font-bold" href="/ru/services">Услуги</a></h2>
        <ul>
          <li><a className="p-1 a-anim-w" href="/ru/web-design">Веб-дизайн</a></li>
          <li><a className="p-1 a-anim-w" href="/ru/web-development">Разработка сайтов</a></li>
          <li><a className="p-1 a-anim-w" href="/ru/online-store-development">Разработка интернет магазинов</a></li>
          <li><a className="p-1 a-anim-w" href="/ru/marketplace-auction-development">Разработка маркетплейсов, аукционов</a></li>
          <li><a className="p-1 a-anim-w" href="/ru/seo">Продвижение сайтов</a></li>
          <li><a className="p-1 a-anim-w" href="/ru/ads">Интернет-реклама</a></li>
        </ul>
      </div>
      <div className={styles.menuColumn}>
        <div className={styles.marginDescFor2Col}>
        <ul>
          <li><a className="p-1 a-anim-w text-xl font-bold" href="/ru/cases">Кейсы</a></li>
          <li><a className="p-1 a-anim-w text-xl font-bold" href="/ru/company">Компания</a></li>
          <li><a className="p-1 a-anim-w text-xl font-bold" href="/ru/reviews">Отзывы</a></li>
          <li><a className="p-1 a-anim-w text-xl font-bold" href="/ru/contact">Контакты</a></li>
        </ul>
        <br></br>
        <p><a className="p-1 a-anim-w" href="mailto:hello@web-machine.rocks">Email: hello@web-machine.rocks</a></p>
        <ButtonLetsTalk сtahref="#" text="Обсудить проект"  additionalClasses="greenToBlack"/>
      </div>
      </div>
    </div>
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
      <div className={styles.languages}>
      <a href="https://web-machine.rocks">EN</a>
      <a href="/ru/">RU</a>
      <a href="/uk/">UA</a>
      <a href="/zh/">ZH</a>
    </div>
    <div className={styles.socialLinks}>
        <a target="_blank" rel="nofollow noopener noreferrer" href="https://www.linkedin.com/company/the-web-machine/">LinkedIn</a>
        <a target="_blank" rel="nofollow noopener noreferrer" href="https://www.facebook.com/THEWEBMACHINE/">Facebook</a>
        <a target="_blank" rel="nofollow noopener noreferrer" href="https://www.instagram.com/web.machine/">Instagram</a>
        <a target="_blank" rel="nofollow noopener noreferrer" href="https://clutch.co/profile/web-machine">Clutch</a>
        <a target="_blank" rel="nofollow noopener noreferrer" href="https://www.behance.net/webmachineagency">Behance</a>
    </div>
      </div>
    </div>
  </div>
</div>

 


    </>
  );
};

export default NavRus;
