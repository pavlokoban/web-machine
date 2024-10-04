import React from 'react';
import styles from './Testimonials.module.css';
import Image from 'next/image';


const testimonialsDataRu = [
  {
    logo: '/images/reviews/vladimir-tsirkin.png',
    text: 'Хотим поблагодарить коллектив компании WEB-MACHINE за высокое качество оказания услуг: менеджеры всегда оперативно отвечают на запросы, работы выполняются качественно и сдаются в срок. Работаем уже более 4 лет, за этот период было сделано много полезной работы: настроена реклама в Google Ads, разработано 5 сайтов. Также хочу отметить компетентность в области проектирования, дизайна и программирования. Планируем и в дальнейшем продолжить совместную работу.',
    photo: '/images/reviews/review-tsirkin-review.png',
    name: 'Владимир Циркин',
    position: 'CEO Vladimir Tsirkin & Associates, Attorneys at Law, NYC'
  },
  {
    logo: '/images/reviews/gotivnichka.png',
    text: 'Digital-агентство WEB-MACHINE разработала для для АО „МСБ Финанс” онлайн-сервис кредитования для малого бизнеса и физических лиц «Готівничка», а также основной сайт компании. За время сотрудничества студия зарекомендовала себя как эксперт в области разработки сервисов, веб-дизайна и интернет-маркетинга. Также благодарю команду за ответственный подход к выполнению поставленных задач и за то, что на коллег можно положиться в любое время. В процессе сотрудничества возникал ряд сложных, внештатных ситуаций, которые решались безотлагательно и максимально качественно.',
    photo: '/images/reviews/review-msb.jpg',
    name: 'Максим Бабенко',
    position: 'директор ООО МСБ Финанс'
  },
  {
    logo: '/images/reviews/toptv.png',
    text: 'Мы обратились в компанию WEB-MACHINE несколько месяцев назад для продвижения нашего сайта. Благодаря рекомендациям и усилиям сотрудников компании продаж у нас стало больше, сайт стал более функциональным и удобным в использовании. Работают профессионально и быстро, результатом мы довольны.',
    photo: '/images/reviews/review-harmash.jpg',
    name: 'Виталий Гармаш',
    position: 'Директор компании TOPTV'
  },
  {
    logo: '/images/reviews/pohorelii-logo.jpg',
    text: 'Меня зовут Виталий, я владелец дизайн студии A1. Работал с Веб Машиной по созданию сайта, после того как сделали сайт - занялись его раскруткой. Конечно было много совместной сложной работы, но в итоге у нас получилось сделать отличный сайт, который работает и как портфолио и как место откуда благодаря продвижению сайта - приходят клиенты. Вместе с ребятами сделали еще один проект для компании-застройщика в Харькове и сейчас являемся партнерами. Надеюсь и в дальнейшем будем работать вместе с Веб-Машиной по раскрутке сайта и достигать новых высот в работе.',
    photo: '/images/reviews/pohorelii.jpg',
    name: 'Виталий Погорелый',
    position: 'CEO студии архитектурного дизайна Pohorilyi & partners'
  },
];

const TestimonialsRu = () => {
  return (
    <>
    <div className={styles.testimonialsContainer}>
      {testimonialsDataRu.map((testimonial, index) => (
        <div key={index} className={styles.testimonial}>
          <Image src={testimonial.logo} alt="Company logo" width={90} height={30} className={styles.logo} />
          <p className={styles.text}>{testimonial.text}</p>
          <div className={styles.authorContainer}>
            <Image src={testimonial.photo} width={100} height={100} alt={testimonial.name} className={styles.photo} />
            <div className={styles.authorInfo}>
              <span className={styles.name}>{testimonial.name}</span>
              <span className={styles.position}>{testimonial.position}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
     {/* Видео */}
     <div style={{ maxWidth: '600px', margin: '-50px auto', position: 'relative' }}>
     <video 
       width="100%" 
       height="auto" 
       autoPlay 
       loop 
       muted 
       playsInline 
       controls={false}
     >
       <source src="/movie/WithLoveToClients.webm" type="video/webm" />
       Your browser does not support the video tag.
     </video>
     </div>
     </>
  );
};

export default TestimonialsRu;
