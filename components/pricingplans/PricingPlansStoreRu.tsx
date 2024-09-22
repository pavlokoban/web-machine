import React, { useState } from 'react';
import styles from './PricingPlans.module.css';

const PricingPlansStoreRu = () => {
  const [visiblePlans, setVisiblePlans] = useState(4);

  const plans = [
    {
      title: 'Базовый вариант>',
      price: '$2900',
      duration: '4-8 недель',
      stack: ['Figma', 'WooCommerce', 'Opencart', 'MySQL'],
      note: 'Продажи онлайн, уникальный дизайн, интеграция с CRM',
      link: '#contact-form-here',
    },
    {
      title: 'Расширенный вариант',
      price: '$4200',
      duration: '10+ недель',
      stack: ['Figma', 'WooCommerce', 'Laravel', 'PostgreSQL'],
      note: 'Базовый вариант + выделенная команда на любые дополнения',
      link: '#contact-form-here',
    },
    {
      title: 'Индивидуальный проект',
      price: '$4000',
      duration: '10+ недель',
      stack: ['Laravel', 'Next.js', 'Yii', 'Figma'],
      note: 'Проект на основе индивиального технического задания',
      link: '#contact-form-here',
    },
    {
      title: 'Разработка на конструкторе',
      price: '$1600',
      duration: '3-6 недель',
      stack: ['Shopify'],
      note: 'Создание сайта с уникальным дизайном',
      link: '#contact-form-here',
    },
  ];
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
            Заказать <span className={styles.arrow} />
          </a>
        </div>
      ))}

    </div>
    
  );
};



export default PricingPlansStoreRu;
