"use client";
import * as React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import MainComponent from './MainComponent';
import { ReactNode } from 'react';
import Footer from './Footer';
import Nav from './Nav';

interface LayoutMainProps {
  children: ReactNode;
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children }) => {
  return (
    <>
      <div className={'flex min-h-screen flex-col justify-between'}>
        <header>
          <nav className={'flex h-12 items-center p-4 justify-between header-common'}>
            <Link className={'text-lg font-bold'} href="/">
              <img src='/web-machine-rocks-logo.svg' width={206} height={42} />
            </Link>
            <div className={'p-1'}>
                <div className={'only-desc'}>
              <Link className={'text-lg p-2'} href="/">
                Web Development
              </Link>
              <Link className={'text-lg p-2'} href="/">
                SEO
              </Link>
              <Link className={'text-lg p-2'} href="/">
                Advertisiment
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
