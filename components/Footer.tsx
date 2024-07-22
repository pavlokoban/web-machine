'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Breadcrumbs from './breadcrumbs/Breadcrumbs';

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
    <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10">

    <Breadcrumbs />

          <div className={'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'}>
              <div className="inline-grid">
                    <Link className={'p-1 a-anim-w'} href="/web-development">Web Development</Link>
                    <Link className={'p-1 a-anim-w'} href="/web-development">Web Development</Link>
              </div>

          <div className="inline-grid">
                <Link className={'p-2 a-anim-w main-menu-links a-white'} href="/web-development">Web Development2</Link>
                <Link className={'p-2 a-anim-w main-menu-links a-white'} href="/web-development">Web Development2</Link>
          </div>

          <div className="inline-grid">
                <Link className={'p-2 a-anim-w main-menu-links a-white'} href="/web-development">Web Development3</Link>
                <Link className={'p-2 a-anim-w main-menu-links a-white'} href="/web-development">Web Development3</Link>
          </div>



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

    <hr className={'hr-footer'}/>

    <p className={'copyright'}>© Web-Machine, LTD</p>

    </div>
    </div>
  );
};

export default Footer;
