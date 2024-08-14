'use client';

import React, { useState } from 'react';
import styles from './Nav.module.css';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

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
        <>
        <ul>
          <li><a className="a-anim" href="/">Home</a></li>
          <li><a className="a-anim" href="/services">Services</a></li>
          <li><a className="a-anim" href="/contact">Contact</a></li>
          <li><a className="a-anim" href="/ru">RUS</a></li>
        </ul>
        </>
      </div>

    </>
  );
};

export default Nav;
