'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface AnimatedLinkProps {
  href: string;
  imgSrc: string;
  imgAlt: string;
  caseText: string;
  stackArray: string[];
  titleText: string;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ href, imgSrc, imgAlt, caseText, stackArray = [], titleText }) => {
  return (
    <Link href={href}>
      <div className="animated-link relative group">
        <Image 
          src={imgSrc}
          alt={imgAlt}
          className="border-12 w-full transition-transform duration-500 ease-in-out group-hover:transform group-hover:translate-y-2"
          width={700}
          height={500}
        />
       <div className="info-case">
          <h3 className="title-format-info">{titleText}</h3>
          <span className="stack-line"></span>
          <div className="flex"> 
            <p className="article-format">{caseText}</p>
            <div className="stack-array">
          {stackArray.map((item, index) => (
            <span key={index} className="stack-item">
              {item}
              {index < stackArray.length - 1 && <span className="comma">, </span>}
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

export default AnimatedLink;
