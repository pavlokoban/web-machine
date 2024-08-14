'use client';

import React from 'react';
import Link from 'next/link';

interface AnimatedLinkProps {
  href: string;
  imgSrc: string;
  imgAlt: string;
  caseText: string;
  titleText: string;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ href, imgSrc, imgAlt, caseText, titleText }) => {
  return (
    <Link href={href}>
      <div className="animated-link relative group">
        <img 
          src={imgSrc}
          alt={imgAlt}
          className="border-36 w-full transition-transform duration-500 ease-in-out group-hover:transform group-hover:translate-y-2"
          width={500}
        />
        <div className="info-case flex">
          <p className="article-format">{caseText}</p>
          <h3 className="title-format-info">{titleText}</h3>
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
