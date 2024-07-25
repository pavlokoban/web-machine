import React, { useState } from 'react';
import Link from 'next/link';
import styles from './FloatingButton.module.css';

const FloatingButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href="/contact">
      <div
        className={styles.floatingButton}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <svg className={styles.outerCircle} viewBox="0 0 200 200">
          <path
            id="circlePath"
            d="M 100, 100 m -90, 0 a 90,90 0 1,0 180,0 a 90,90 0 1,0 -180,0"
          />
          <text className={styles.rotatingText}>
            <textPath href="#circlePath">
              Turning business into a game anything is possible
            </textPath>
          </text>
        </svg>
        <div className={styles.innerCircle}>
          <span className={styles.innerText}>NEED A QUOTE?</span>
        </div>
      </div>
    </Link>
  );
};

export default FloatingButton;
