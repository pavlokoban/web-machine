'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface AnimatedVideoLinkProps {
  href: string;
  videoSrcWebm: string;
  videoSrcMp4: string;
  caseText: string;
  stackArray: string[];
  titleText: string;
}

const AnimatedVideoLink: React.FC<AnimatedVideoLinkProps> = ({ href, videoSrcWebm, videoSrcMp4, caseText, stackArray = [], titleText }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = document.createElement('video');
    video.src = videoSrcMp4 || videoSrcWebm;
    video.onloadeddata = () => setIsLoaded(true);
    video.load();
  }, [videoSrcWebm, videoSrcMp4]);

  return (
    <Link href={href}>
      <div className="animated-link relative group">
        {isLoaded ? (
          <video
            autoPlay
            preload="auto"
            muted
            playsInline
            loop
            className="border-12 w-full transition-transform duration-500 ease-in-out group-hover:transform group-hover:translate-y-2"
            style={{ maxWidth: '100%' }}
          >
            <source src={videoSrcWebm} type="video/webm" />
            <source src={videoSrcMp4} type="video/mp4" />
          </video>
        ) : (
          <div className="video-placeholder">Loading...</div>
        )}

        <div className="info-case ">
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
            <div className="arrow">&#x2794;</div> {/* альтернативный вариант &#x279C; */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AnimatedVideoLink;
