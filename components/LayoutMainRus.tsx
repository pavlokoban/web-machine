"use client";
import * as React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import MainComponent from './MainComponent';
import { ReactNode } from 'react';
import FooterRu from './footer/FooterRu';
import NavRus from './nav/NavRus';

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
              <Link className={'p-2 a-anim main-menu-links'} href="/ru/services">
                Услуги
              </Link>
              <Link className={'p-2 a-anim main-menu-links'} href="/ru/company">
                Компания
              </Link>
              <Link className={'p-2 a-anim main-menu-links'} href="/ru/contact">
                Контакты
              </Link>
              </div>
              <NavRus />
            </div>
  
          </nav>
        </header>
        <main>{children}</main>
        <FooterRu />
      </div>
    </>
  );
};

export default LayoutMainRus;
