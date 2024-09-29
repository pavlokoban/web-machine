import React from 'react';
import Slider from 'react-slick';
import styles from './StageSlider.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const stages = [
  { number: 1, title: 'Маркетинговый анализ', result: 'Проводим анализ сезонности, конкурентов и целевой аудитории' },
  { number: 2, title: 'Семантическое ядро', result: 'Формируем семантическое ядро сайта (сбор и кластеризация)' },
  { number: 3, title: 'Правильная структура', result: 'На основе  семантики проектируем логическую структуру сайта' },
  { number: 4, title: 'Техническое задание', result: 'Помогаем составить техническое задание на создание сайта' },
  { number: 5, title: 'Рекомендации и инструкции', result: 'Передаем разработчикам SEO-рекомендации' },
  { number: 6, title: 'Контент-план', result: 'Составляем и готовим контент-план для наполнения сайта' },
  { number: 7, title: 'Аналитика', result: 'Устанавливаем и настраиваем системы веб-аналитики' },
  { number: 8, title: 'Интеграция', result: 'Базовые технические решения для дальнейшей оптимизации' },
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

const StageSliderSeoOnDevelopmentRu = () => {
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

export default StageSliderSeoOnDevelopmentRu;