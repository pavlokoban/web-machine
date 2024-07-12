import * as React from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import MainComponent from './MainComponent';

export default function LayoutMain({title, children}){
return (
    <>
    <head>
        <title>{title ? title + ' WM': ' WM1'}</title>
    </head>
        <body>
        <div className={'flex min-h-screen flex-col justify-between'}>
            <header>
                <nav className={'flex h-12 items-center p-4 justify-between shadow-md'}>
                        <Link className={'text-lg font-bold'} href="/">
                        <img src='/next.svg' width={100} height={100}/>
                        </Link>
                        
                        <div className={'p-1'}>
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
                </nav>
            </header>
            <main>{ children }</main>

            <footer className={'flex h-10 item-center shadow-inner justify-center'}>Footer</footer>
        </div>
        </body>

    </>
);
};