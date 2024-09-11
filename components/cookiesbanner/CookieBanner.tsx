// components/CookieBanner.tsx
"use client"
import { useState, useEffect } from 'react';
import styles from './CookieBanner.module.css';

const CookieBanner = () => {
  const [isBannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    const isCookieConsentGiven = localStorage.getItem('cookieConsent');
    if (!isCookieConsentGiven) {
      setBannerVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setBannerVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setBannerVisible(false);
  };

  if (!isBannerVisible) return null;

  return (
    <div className={styles.cookieBanner}>
      <p>This website uses cookies to ensure you get the best experience on our website.</p>
      <div className={styles.buttonsContainer}>
        <button onClick={handleDecline} className={styles.declineButton}>Decline</button>
        <button onClick={handleAccept}>Accept</button>
      </div>
    </div>
  );
};

export default CookieBanner;
