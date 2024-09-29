import React, { useState } from 'react';
import styles from './PricingPlans.module.css';

const PricingSEOPlansRu = () => {
  const [visiblePlans, setVisiblePlans] = useState(4);

  const plans = [
    {
      title: 'Продвижение сайта',
      price: '$330/мес.',
      duration: '6+ мес.',
      stack: ['Семантика', 'Контент', 'Линкбилдинг', 'Скорость загрузки', 'Аналитика'],
      note: 'Комплексное продвижение сайта в поиске Google по согласованной с клиентом семантике',
      link: '/ru/seo',
    },
    {
      title: 'Раскрутка магазина',
      price: '$500/мес.',
      duration: '8+ мес.',
      stack: ['Семантика', 'Контент', 'Линкбилдинг', 'Скорость загрузки', 'Аналитика'],
      note: 'Поисковое продвижение интернет-магазинов по транзакционным запросам',
      link: '/ru/seo-online-store',
    },
    {
      title: 'SEO на этапе разработки',
      price: '$700',
      duration: '10+ недель',
      stack: ['Семантика', 'Контент', 'Линкбилдинг', 'Скорость загрузки'],
      note: 'Возможность сэкономить время и финансы для успешного и результативного продвижения',
      link: '/ru/seo-on-development',
    },
    {
      title: 'Интернет-реклама',
      price: '$500/мес.',
      duration: '3+ мес.',
      stack: ['Креатив', 'Маркетинг', 'Программирование', 'Скорость загрузки', 'Аналитика'],
      note: 'Создание и настройка аккаунта Google Ads, проведение рекламных кампаний, аналитика, рост продаж',
      link: '/ru/ads',
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
            Подробнее <span className={styles.arrow} />
          </a>
        </div>
      ))}

    </div>
    
  );
};



export default PricingSEOPlansRu;
