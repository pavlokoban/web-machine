import React from 'react';
import styles from './Testimonials.module.css';
import Image from 'next/image';

const testimonialsData = [
  {
    logo: '/images/reviews/vladimir-tsirkin.png',
    text: 'We’d like to thank the team at Web Machine for the high quality of service. Their managers always respond promptly to requests plus the work is done efficiently and delivered on time. We have been working with them for more than 4 years, and during this period they have helped us tremendously, including managing our advertising on Google Ads and developing 5 websites for us. We’d also like to note their competence in the field of design and programming. This is a company we plan to continue working with in the future!',
    photo: '/images/reviews/review-tsirkin-review.png',
    name: 'Vladimir Tsirkin',
    position: 'CEO Vladimir Tsirkin & Associates, Attorneys at Law, NYC'
  },
  {
    logo: '/images/reviews/vladimir-tsirkin.png',
    text: 'Great team. It’s a pleasure to work with them. Having concluded an agreement with them on integrated promotion on the internet, we were able to fully concentrate on business development, since we know that our marketing is in safe hands!',
    photo: '/images/reviews/review-tsirkin-review.png',
    name: 'Dmitry Markus',
    position: 'Director of Ultra Finance LLC'
  },
  {
    logo: '/images/reviews/vladimir-tsirkin.png',
    text: 'We’d like to thank the team at Web Machine for the high quality of service. Their managers always respond promptly to requests plus the work is done efficiently and delivered on time. We have been working with them for more than 4 years, and during this period they have helped us tremendously, including managing our advertising on Google Ads and developing 5 websites for us. We’d also like to note their competence in the field of design and programming. This is a company we plan to continue working with in the future!',
    photo: '/images/reviews/review-tsirkin-review.png',
    name: 'Vladimir Tsirkin',
    position: 'CEO Vladimir Tsirkin & Associates, Attorneys at Law, NYC'
  },
];

const Testimonials = () => {
  return (
    <>
    <div className={styles.testimonialsContainer}>
      {testimonialsData.map((testimonial, index) => (
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
     <div style={{ maxWidth: '600px', margin: 'auto', position: 'relative' }}>
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

export default Testimonials;
