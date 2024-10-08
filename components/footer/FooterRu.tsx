'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import ButtonLetsTalk from '../buttonletstalk/ButtonLetsTalk';
import styles from '../nav/Nav.module.css';
import Image from 'next/image';

const FooterRu: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    //script.src = '//telegram.im/widget-button/index.php?id=@WEB_MACHINE';
    document.getElementsByTagName('head')[0].appendChild(script);

    return () => {
      document.getElementsByTagName('head')[0].removeChild(script);
    };
  }, []);

  return (
    <div className={'footer-common'}>
    <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10">

    <Breadcrumbs />
    <hr className={'hr-footer'}/>
    <br></br>
          <div className={'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'}>
              <div className="inline-grid">
                    <Link className={'p-2 a-anim-w main-menu-links a-white'} href="/ru/services">Услуги</Link>
                    <Link className={'p-1 a-anim-w'} href="/ru/web-development">Разработка сайтов</Link>
                    <Link className={'p-1 a-anim-w'} href="/ru/online-store-development">Разработка интернет-магазинов</Link>
                    <Link className={'p-1 a-anim-w'} href="/ru/web-development/marketplace">Разработка маркетплейсов</Link>
                    <Link className={'p-1 a-anim-w'} href="/ru/design">Веб-дизайн</Link>
                    <Link className={'p-1 a-anim-w'} href="/ru/seo">Раскрутка сайтов</Link>
                    <br></br>
                    <div className={styles.languages}>
                    <a href="https://web-machine.rocks">EN</a>
                    <a href="/ru/">RU</a>
                    <a href="/uk/">UA</a>
                    <a href="/zh/">ZH</a>
                    </div>
                    <br></br>
                    <div className={styles.socialLinks}>
                    <a target="_blank" rel="nofollow noopener noreferrer" href="https://www.linkedin.com/company/the-web-machine/">LinkedIn</a>
                    <a target="_blank" rel="nofollow noopener noreferrer" href="https://www.facebook.com/THEWEBMACHINE/">Facebook</a>
                    <a target="_blank" rel="nofollow noopener noreferrer" href="https://www.instagram.com/web.machine/">Instagram</a>
                    <a target="_blank" rel="nofollow noopener noreferrer" href="https://clutch.co/profile/web-machine">Clutch</a>
                    <a target="_blank" rel="nofollow noopener noreferrer" href="https://www.behance.net/webmachineagency">Behance</a>
                    </div>
              </div>

          <div className="inline-grid">
                <Link className={'p-1 a-anim-w'} href="/ru/cases">Кейсы</Link>
                <Link className={'p-1 a-anim-w'} href="/ru/blog">Блог</Link>
                <Link className={'p-1 a-anim-w'} href="/ru/reviews">Отзывы</Link>
                <Link className={'p-1 a-anim-w'} href="/ru/company">Компания</Link>
                <Link className={'p-1 a-anim-w'} href="/ru/online-services">Сервисы</Link>
                <Link className={'p-1 a-anim-w'} href="/ru/contact">Контакты</Link>
                <Link className={'p-1 a-anim-w'} href="/ru/sitemap">Карта сайта</Link>
                <br></br>
                <Link className={'a-anim-w text-sm'} href="/ru/legal">Юридическая информация</Link>
                <Link className={'a-anim-w text-sm'} href="/ru/cookies">Политика Cookies</Link>
          </div>

          <div className="inline-grid">
            <div className='footerAdrressText'>
          <p><span className='underline'>Штаб-квартира:</span> Таллинн, Эстония 🇪🇪</p>
          <p><span className='underline'>Офис разработки:</span> Киев, Украина 🇺🇦</p>
          <p><span className='underline'>Преставительства:</span> 
          <br>
          </br>Гуанчжоу, Китай 🇨🇳 <br>
          </br> Братислава, Словакия 🇸🇰</p>
          </div>
          <p><a className={'p-2 a-anim-w main-menu-links a-white'} href="mailto:hello@web-machine.rocks">Email: hello@web-machine.rocks</a></p>
               

            <Image src="/clutch_review_unit_footer.svg" alt="Clutch Review" width={171} height={100} />


          <div style={{maxWidth: '270px'}}>
            <ButtonLetsTalk сtahref="/ru/contact" text="Обсудить проект" additionalClasses="blackToGreen" />
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
    </div>
    <hr className={'hr-footer'}/>
            <div className='grid'>
                <p className={'copyright'}>© 2013-2024 г. Все права защищены. Компания ООО &quot;Web-Machine&quot;</p>
            </div>

    </div>
    </div>
  );
};

export default FooterRu;
