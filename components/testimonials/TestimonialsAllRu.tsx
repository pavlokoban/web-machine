import React from 'react';
import styles from './Testimonials.module.css';

const testimonialsDataRu = [
  {
    logo: '/images/reviews/mida-logo-small.png',
    text: 'The client has seen a significant increase in conversions within the first three months while the cost of conversion has decreased substantially. WEB-MACHINE has executed a smooth workflow through effective communication and timeliness. Their personal touch and results-driven style are impressive.',
    photo: '/images/reviews/semyon-prit.png',
    name: 'Semyon Prit',
    position: 'Marketing director, MIDA (Toronto, Ontario)'
  },
  {
    logo: '/images/reviews/yumimobi.png',
    text: 'The website designed by WEB-MACHINE hasnʼt been launched yet but has been well-received by the client. Their workflow was effective and they responded quickly. With only needing to communicate with the project-manager, there was a lot of time saved.',
    photo: '/images/reviews/yuan-liu.png',
    name: 'Yuan Liu',
    position: 'Product Manager, YUMI MOBI (Beijing, China)'
  },
  {
    logo: '/images/reviews/pohorelii-logo.jpg',
    text: 'Меня зовут Виталий, я владелец дизайн студии A1. Работал с Веб Машиной по созданию сайта, после того как сделали сайт - занялись его раскруткой. Конечно было много совместной сложной работы, но в итоге у нас получилось сделать отличный сайт, который работает и как портфолио и как место откуда благодаря продвижению сайта - приходят клиенты. Вместе с ребятами сделали еще один проект для компании-застройщика в Харькове и сейчас являемся партнерами. Надеюсь и в дальнейшем будем работать вместе с Веб-Машиной по раскрутке сайта и достигать новых высот в работе.',
    photo: '/images/reviews/pohorelii.jpg',
    name: 'Виталий Погорелый',
    position: 'CEO студии архитектурного дизайна Pohorilyi & partners'
  },
  {
    logo: '/images/reviews/doctor.png',
    text: 'Обратились в компанию WEB-MACHINE с задачей создания сайта для частной медицинской клиники. Для этих целей был выделен персональный менеджер проекта, с которым мы плодотворно работали. Хочу отметить оперативность работы всей команды, четкое и своевременное исполнение поставленных задач. Более того, на все вопросы предоставлялись и предоставляются развернутые ответы. Ежемесячно компания предоставляет отчет о проделанной работе. Результатами разработки сайта я очень довольна. Сейчас мы активно сотрудничаем с компанией по продвижению сайта — результаты ежемесячно улучшаются: сайт по многим позициям находится в десятке и на первом листе выдачи в поисковых системах. WEB-MACHINE - отличная команда специалистов, которую смело порекомендую для разработки и продвижения сайта! Спасибо за сотрудничество!',
    photo: '/images/reviews/doctor.jpg',
    name: 'Михедько И.М.',
    position: 'руководитель Поликлиники Ваш Доктор'
  },
  {
    logo: '/images/reviews/ultracash.png',
    text: 'Отличная команда. Работать с ними одно удовольствие. Заключив с ними договор на комплексное продвижение в сети интернет, мы смогли полностью сосредоточиться на развитии бизнеса. Так как знаем, что наш маркетинг в надежных руках этих хрупких девушек.',
    photo: '/images/reviews/review-markus.jpg',
    name: 'Дмитрий Маркус',
    position: 'директор компании ООО Ultra Finance'
  },
  {
    logo: '/images/reviews/rmc.png',
    text: 'Наш изначальный сайт был полностью переделан, и теперь он современный и функциональный. Главная задача, которая стояла перед Веб-машиной - это разработать возможность онлайн-заявок с сайта и продвинуть его в поисковых системах. Рост посещаемости и заявок с сайта фактически удвоился за 3 мес. работы!',
    photo: '/images/reviews/stets.jpg',
    name: 'Наталья Стец',
    position: 'Коммерческий директор, ООО Экомет'
  },

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
];

const TestimonialsAllRu = () => {
  return (
    <>
    <div className={styles.testimonialsContainer}>
      {testimonialsDataRu.map((testimonial, index) => (
        <div key={index} className={styles.testimonial}>
          <img src={testimonial.logo} alt="Company logo" className={styles.logo} />
          <p className={styles.text}>{testimonial.text}</p>
          <div className={styles.authorContainer}>
            <img src={testimonial.photo} alt={testimonial.name} className={styles.photo} />
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

export default TestimonialsAllRu;
