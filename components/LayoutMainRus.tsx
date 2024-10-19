"use client";
import * as React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ReactNode } from 'react';
import FooterRu from './footer/FooterRu';
import NavRus from './nav/NavRus';
import Script from 'next/script';
import ButtonLetsTalk from './buttonletstalk/ButtonLetsTalk';

interface LayoutMainProps {
  children: ReactNode;
}

const LayoutMainRus: React.FC<LayoutMainProps> = ({ children }) => {
  return (
    <>
      <div className={'flex min-h-screen flex-col justify-between gray112'}>
        <header>
          <nav className={'flex h-12 items-center p-4 justify-between header-common'}>
            <Link href="/ru">
              <Image src='/web-machine-rocks-logo-2024.svg' width={170} height={35} alt='WEB-MACHINE'/>
            </Link>
            <div className={'p-1'}>
              <div className={'only-desc main-menu-links'}>
                  <Link className={'p-2 a-anim main-menu-links'} href="/ru/company">Компания</Link>
                  <Link className={'p-2 a-anim main-menu-links'} href="/ru/services">Услуги</Link>
                  <Link className={'p-2 a-anim main-menu-links'} href="/ru/cases">Работы</Link>
                  <Link className={'p-2 a-anim main-menu-links'} href="/ru/development-cost-calculator">Оценка проекта</Link>
                  {/* <Link className={'p-2 a-main-menu-cta main-menu-links'} href="/ru/contact">Оставить заявку</Link> */}
                  <div style={{overflow: 'visible', top: '-12px', position: 'relative', display: 'inline-block'}}><ButtonLetsTalk сtahref="/ru/contact" text="Обсудить проект" /></div>
             
              </div>
           <NavRus />
            </div>
  
          </nav>
        </header>
        <main>{children}</main>
        <FooterRu />
        <Script id="tawk-script">
        {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/671270a64304e3196ad3c851/1iag0g393';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
          </Script>
      </div>
    </>
  );
};

export default LayoutMainRus;
