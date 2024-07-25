import React from 'react';
import styles from './MarqueeText.module.css';

const MarqueeText: React.FC = () => {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marquee}>
        <span className={styles.text}>Turning business into a game anything is possible!</span>
        <span className={styles.text}>Turning business into a game anything is possible!</span>
        <span className={styles.text}>Turning business into a game anything is possible!</span>
      </div>
    </div>
  );
};

export default MarqueeText;
