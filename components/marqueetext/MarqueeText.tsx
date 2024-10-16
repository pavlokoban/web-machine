import React from 'react';
import styles from './MarqueeText.module.css';

const MarqueeText: React.FC = () => {
  return (
    <div className={styles.marqueeContainer}>
      {/* Верхняя строка (медленнее, поверх видео) */}
      <div className={styles.topMarquee}>
        <span className={styles.smallText}>WEB-MACHINE ROCKS! Turning business into a game anything is possible! DESIGN, SEO, REACT, NEXT.JS, TYPESCRIPT, PHP, LARAVEL, WOOCOMMERCE, WORDPRESS, JS, FIGMA, GIT</span>
        <span className={styles.smallText}>WEB-MACHINE ROCKS! Turning business into a game anything is possible! DESIGN, SEO, REACT, NEXT.JS, TYPESCRIPT, PHP, LARAVEL, WOOCOMMERCE, WORDPRESS, JS, FIGMA, GIT</span>
        <span className={styles.smallText}>WEB-MACHINE ROCKS! Turning business into a game anything is possible! DESIGN, SEO, REACT, NEXT.JS, TYPESCRIPT, PHP, LARAVEL, WOOCOMMERCE, WORDPRESS, JS, FIGMA, GIT</span>
      </div>

      {/* Видео */}
      <div style={{ maxWidth: '600px', margin: 'auto', position: 'relative'}}>
        <video 
          className={styles.videoStyles}
          autoPlay 
          loop 
          muted 
          playsInline 
          controls={false}
        >
          <source src="/movie/MarquueTextUpdBlack.webm" type="video/webm" />
          Ваш браузер не поддерживает формат видео WEMP.
        </video>

        {/* Белая бегущая строка поверх видео */}
        <div className={styles.diagonalMarquee}>
          <span className={styles.diagonalText}>
            Turning business into a game anything is possible!
          </span>
          <span className={styles.diagonalText}>
            Turning business into a game anything is possible!
          </span>
          <span className={styles.diagonalText}>
            Turning business into a game anything is possible!
          </span>
        </div>
      </div>

      {/* Основная бегущая строка под видео */}
      <div className={styles.marquee}>
        <span className={styles.text}>Turning business into a game anything is possible!</span>
        <span className={styles.text}>Turning business into a game anything is possible!</span>
        <span className={styles.text}>Turning business into a game anything is possible!</span>
      </div>
    </div>
  );
};

export default MarqueeText;
