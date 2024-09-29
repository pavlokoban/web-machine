import React, { useState } from 'react';
import styles from './PricingPlans.module.css';

const PricingPlansRu = () => {
  const [visiblePlans, setVisiblePlans] = useState(4);

  const plans = [
    {
      title: 'Корпоративный сайт',
      price: '$2600',
      duration: '3-4 недели',
      stack: ['Figma', 'Wordpress', 'Next.js', 'Node.js', , 'MySQL'],
      note: 'Многостраничный сайт, уникальный дизайн',
      link: '/ru/web-development',
    },
    {
      title: 'Интернет-магазин',
      price: '$2900',
      duration: '4-8 недель',
      stack: ['Figma', 'WooCommerce', 'Opencart', 'MySQL'],
      note: 'Продажи онлайн, уникальный дизайн, интеграция с CRM',
      link: '/ru/online-store-development',
    },
    {
      title: 'Маркетплейс',
      price: '$8000',
      duration: '10+ недель',
      stack: ['Figma', 'WooCommerce', 'Laravel', 'PostgreSQL'],
      note: 'Мультивендор, фреймворк, интеграция с CRM',
      link: '/ru/web-development/marketplace-development',
    },
    {
      title: 'Индивидуальный проект',
      price: '$4000',
      duration: '10+ недель',
      stack: ['React', 'Next.js', 'Node.js', 'Figma', 'MongoDB'],
      note: 'Проект на основе индивиального технического задания',
      link: '#contact-form-here',
    },
    {
      title: 'Аукцион',
      price: '$4200',
      duration: '10+ недель',
      stack: ['Figma', 'WooCommerce', 'Opencart', 'MySQL'],
      note: 'Интернет-магазин с функцией онлайн лотов',
      link: '/ru/web-development/auction-development',
    },
    {
      title: 'Портал / сервис',
      price: '$4200',
      duration: '10+ недель',
      stack: ['React', 'Next.js', 'Node.js', 'Figma', 'MongoDB'],
      note: 'Сложный сайт с расширенным функционалом',
      link: '/ru/web-development/portal',
    },
    {
      title: 'Лендинг',
      price: '$1600',
      duration: '1-3 недели',
      stack: ['Wordpress', 'Design', 'Figma', 'Web-development'],
      note: '1 страница, функция обратного звонка',
      link: '/ru/landing',
    },
    {
      title: 'Разработка на конструкторе',
      price: '$1600',
      duration: '1-3 недели',
      stack: ['Tilda', 'Shopify', 'Wix', 'Webflow'],
      note: 'Создание сайта с уникальным дизайном',
      link: '/ru/saas',
    },
  ];

  // Функция для показа большего количества планов
  const showMorePlans = () => {
    setVisiblePlans((prevVisiblePlans) => prevVisiblePlans + 4);
  };

  return (
    <div className={styles.pricingContainer}>
      {plans.slice(0, visiblePlans).map((plan, index) => (
        <div key={index} className={styles.planCard}>
          <h3 className={styles.planTitle}>{plan.title}</h3>
          <p className={styles.planDuration}>Сроки: {plan.duration}</p>
          <p className={styles.planNote}>{plan.note}</p>
          <hr className={styles.hrForPP}></hr>
          <div className="stack-array" style={{ minHeight: '60px' }}>
            {plan.stack.map((tech, idx) => (
              <span key={idx} className="stack-item stackForPP">
                {tech}
                {idx < plan.stack.length - 1 && <span className="comma">, </span>}
              </span>
            ))}
          </div>
          <hr className={styles.hrForPP}></hr>
          <p>от: <span className={styles.planPrice}>{plan.price}</span></p>
          <a href={plan.link} className={`${styles.discussButton} discussButton`}>
            Подробнее <span className={styles.arrow} />
          </a>
        </div>
      ))}

      {/* Кнопка "Загрузить еще" */}

      {visiblePlans < plans.length && (
          <div style={{width: '100%', margin: 'auto'}}>
        <button
          className={`${styles.discussButton} ${styles.forBlackBack} ${styles.loadMoreButton}`}
          onClick={showMorePlans}
        >
          Показать другие варианты
        </button>
        </div>
      )}
    </div>
    
  );
};

export default PricingPlansRu;
