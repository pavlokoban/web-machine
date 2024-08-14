'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface AnimatedVideoLinkProps {
  href: string;
  videoSrcWebm: string;
  videoSrcMp4: string;
  caseText: string;
  titleText: string;
}

const AnimatedVideoLink: React.FC<AnimatedVideoLinkProps> = ({ href, videoSrcWebm, videoSrcMp4, caseText, titleText }) => {
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
        <div className="info-case flex">
          <p className="article-format">{caseText}</p>
          <h3 className="title-format-info">{titleText}</h3>
        </div>
        <div className="overlay">
          <div className="circle">
            <div className="arrow">&#x279C;</div> {/* Heavy Round-Tipped Rightwards Arrow */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AnimatedVideoLink;
