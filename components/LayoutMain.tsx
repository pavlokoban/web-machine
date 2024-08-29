"use client";
import * as React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import MainComponent from './MainComponent';
import { ReactNode } from 'react';
import Footer from './footer/Footer';
import Nav from './nav/Nav';

interface LayoutMainProps {
  children: ReactNode;
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children }) => {
  return (
    <>
      <div className={'flex min-h-screen flex-col justify-between'}>
        <header>
          <nav className={'flex h-12 items-center p-4 justify-between header-common'}>
            <Link href="/">
              <img src='/web-machine-rocks-logo-2024.svg' width={170} height={35} />
            </Link>
            <div className={'p-1'}>
                <div className={'only-desc main-menu-links'}>
              <Link className={'p-2 a-anim main-menu-links'} href="/web-development">
                Web Development
              </Link>
              <Link className={'p-2 a-anim main-menu-links'} href="/seo">
                SEO
              </Link>
              <Link className={'p-2 a-anim main-menu-links'} href="/ru">
                ru
              </Link>
              <Link className={'p-2 a-anim main-menu-links'} href="/about">
                About
              </Link>
              </div>
              <Nav />
            </div>
  
          </nav>
        </header>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default LayoutMain;
