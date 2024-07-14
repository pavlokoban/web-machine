'use client';
import React, { useEffect } from 'react';

const Footer: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//telegram.im/widget-button/index.php?id=@WEB_MACHINE';
    document.getElementsByTagName('head')[0].appendChild(script);

    return () => {
      // Удаляем скрипт при размонтировании компонента
      document.getElementsByTagName('head')[0].removeChild(script);
    };
  }, []);

  return (
    <div className={'footer-common'}>
        
    <div className={'telegram-bottom'}>
      <a
        href="https://telegram.im/@WEB_MACHINE"
        target="_blank"
        className="telegramim_button telegramim_shadow telegramim_pulse"
        style={{
          fontSize: '29px',
          width: '64px',
          background: '#000000',
          boxShadow: '1px 1px 5px #000000',
          color: '#FFFFFF',
          borderRadius: '50px',
          height: '64px',
        }}
        title=""
      >
        <i className="ftelegramim ftelegramim-telegram-logo"></i>
      </a>
    </div>
    </div>
  );
};

export default Footer;
