import React from 'react';
import Slider from 'react-slick';
import styles from './StageSlider.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const stages = [
  { number: 1, title: 'Аудит', result: 'Анализ кампаний конкурентов, ниши и текущей кампании' },
  { number: 2, title: 'Стратегия', result: 'Разработка стратегии продвижения с учетом аудита и целей кампании' },
  { number: 3, title: 'Достижение целей', result: 'Достижение результатов по поставленным KPI' },
  { number: 4, title: 'Улучшение', result: 'Поддержание и оптимизация результативности кампаний' },
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

const StageSliderPPCRu = () => {
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

export default StageSliderPPCRu;
