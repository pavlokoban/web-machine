import React from 'react';
import Slider from 'react-slick';
import styles from './StageSlider.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const stages = [
  { number: 1, title: 'Аудит + SEO', result: 'Диагонстика проблем, разработка стратегии продвижения' },
  { number: 2, title: 'SEO + PR', result: 'Развитие айта, вывод в ТОП, рост целевого трафика и конверсий' },
  { number: 3, title: 'Техподдержка', result: 'Закрепление результатов, дальнейшее развитие сайта' },
];

const Arrow = ({ className, style, onClick }: any) => {
  return (
    <button
      className={className}
      style={{ ...style, display: 'block', color: '#000', fontSize: '32px', right: '0'}}
      onClick={onClick}
    >
      {className.includes('slick-prev') ? '❮' : '❯'}
    </button>
  );
};

const StageSliderSeoRu = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <Arrow className={`${styles.slickArrow} ${styles.slickPrev}`} />,
    nextArrow: <Arrow className={`${styles.slickArrow} ${styles.slickNext}`} />,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {stages.map((stage, index) => (
          <div key={stage.number} className={styles.slide}>
            <div className="inline-flex-desc">
              <div className="desc-33-mob-100">
                <div className={styles.stageNumber}>{stage.number}</div>
              </div>

              <div className="desc-67-mob-100">
                <div className={styles.stageContent}>
                  <div className="inline-flex-desc">
                    <div className={styles.stageTitle}>{stage.title}</div>
                    <div className={styles.slideCounter}>{index + 1}/{stages.length}</div>
                  </div>
                  <div className={styles.resultText}>
                    <p className={styles.resultTextR}>Результат:</p>
                    <p className={styles.resultTextP}>{stage.result}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StageSliderSeoRu;
