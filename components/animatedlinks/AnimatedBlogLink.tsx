'use client';

import React from 'react';
import Link from 'next/link';
import styles from './AnimatedBlogLink.module.css'; // Подключаем стили

interface AnimatedBlogLinkProps {
  href: string;
  imgSrc: string;
  imgAlt: string;
  dateText: string;
  topicArray: string[];
  titleText: string;
  views: number;
}

const AnimatedBlogLink: React.FC<AnimatedBlogLinkProps> = ({ href, imgSrc, imgAlt, views, dateText, topicArray = [], titleText }) => {
  return (
    <Link href={href}>
      <div className="animated-link relative group">
        <img 
          src={imgSrc}
          alt={imgAlt}
          className="border-12 w-full transition-transform duration-500 ease-in-out group-hover:transform group-hover:translate-y-2"
          width={500}
        />
      <div className="info-case">
  <h3 className="title-format-info">{titleText}</h3>
  <span className="stack-line"></span>
  <div className="flex">
    {/* Дата и количество просмотров */}
    <p className={styles.articleFormat}>
  {/* Иконка календаря перед датой */}
  <span className={styles.icon}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-1h12V3a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v1z"/>
    </svg>
  </span>
  <span className={styles.dateText}>{dateText}</span>
  {/* Иконка просмотров перед количеством просмотров */}
  <span className="styles.icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.07-.122.153-.195.24a13.133 13.133 0 0 1-1.66 2.042C11.88 11.332 10.12 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.133 13.133 0 0 1 1.173 8z"/>
      <path d="M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM8 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
    </svg>
  </span>
  <span className={styles.viewsText}>{views}</span>
</p>


    <div className="stack-array">
      {topicArray.map((item, index) => (
        <span key={index} className="stack-item">
          {item}
          {index < topicArray.length - 1 && <span className="comma">, </span>}
        </span>
      ))}
    </div>
  </div>
</div>

        <div className="overlay">
          <div className="circle">
            <div className="arrow">&#x2794;</div> 
          </div>
        </div>
      </div>
    </Link>
  );
};



export default AnimatedBlogLink;
