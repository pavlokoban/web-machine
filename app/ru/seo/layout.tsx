// app/[lang]/layout.tsx
import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import { Montserrat } from "next/font/google";
import React from 'react';


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
  <html lang="ru">
  <head>
  <script
            src="https://www.googletagmanager.com/gtag/js?id=G-8Y0XBRKL31&amp;cx=c&amp;_slc=1"
            async
          ></script>

        </head>
        <body>{children}

        </body>
  
      </html>
    );
  }