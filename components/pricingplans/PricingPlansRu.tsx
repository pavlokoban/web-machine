import React from 'react';
import styles from './PricingPlans.module.css';

const PricingPlansRu = () => {
  const plans = [
    {
      title: 'Лендинг',
      price: '$1600',
      duration: '2 недели',
      stack: ['Wordpress', 'Design', 'Figma', 'Web-development'],
      note: '1 страница, функция обратного звонка',
    },
    {
      title: 'Корпоративный сайт',
      price: '$2400',
      duration: '3-4 недели',
      stack: ['React', 'Node.js', 'Figma', 'MongoDB'],
      note: 'Многостраничный сайт, интеграция с CRM',
    },
    {
      title: 'Интернет-магазин',
      price: '$3100',
      duration: '3-4 недели',
      stack: ['React', 'Node.js', 'Figma', 'MongoDB'],
      note: 'Многостраничный сайт, интеграция с CRM',
    },
    {
      title: 'Аукцион',
      price: '$4000',
      duration: '3-4 недели',
      stack: ['React', 'Node.js', 'Figma', 'MongoDB'],
      note: 'Многостраничный сайт, интеграция с CRM',
    },
    {
      title: 'Маркетплейс',
      price: '$4000',
      duration: '3-4 недели',
      stack: ['React', 'Node.js', 'Figma', 'MongoDB'],
      note: 'Многостраничный сайт, интеграция с CRM',
    },
    {
      title: 'Портал / сервис',
      price: '$4000',
      duration: '3-4 недели',
      stack: ['React', 'Node.js', 'Figma', 'MongoDB'],
      note: 'Многостраничный сайт, интеграция с CRM',
    },
    {
      title: 'Разработка на конструкторе',
      price: '$1500',
      duration: '3-4 недели',
      stack: ['Tilda', 'Shopify', 'Wix', 'Webflow'],
      note: 'Многостраничный сайт, интеграция с CRM',
    },
    {
      title: 'Индивидуальный проект',
      price: '$4000',
      duration: '3-4 недели',
      stack: ['React', 'Node.js', 'Figma', 'MongoDB'],
      note: 'Многостраничный сайт, интеграция с CRM',
    },
    // Добавьте больше планов по необходимости
  ];

  return (
   // <section className={styles.pricingSection}>
      <div className={styles.pricingContainer}>
        {plans.map((plan, index) => (
          <div key={index} className={styles.planCard}>
            <h3 className={styles.planTitle}>{plan.title}</h3>
            <p className={styles.planDuration}>Сроки: {plan.duration}</p>

            <p className={styles.planNote}>{plan.note}</p>

            <hr className={styles.hrForPP}></hr>
            <div className="stack-array" style={{minHeight: '60px'}}>
              {plan.stack.map((tech, idx) => (
                <span key={idx} className="stack-item stackForPP">
                  {tech}
                  {idx < plan.stack.length - 1 && <span className="comma">, </span>}
                </span>
              ))}
            </div>
            <hr className={styles.hrForPP}></hr>
            
            <p>от: <span className={styles.planPrice}>{plan.price}</span></p>
            <a href="#" className={`${styles.discussButton} discussButton`}>
              Подробнее <span className={styles.arrow} />
            </a>
          </div>
        ))}
      </div>
   // </section>
  );
};

export default PricingPlansRu;
