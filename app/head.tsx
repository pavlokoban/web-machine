// app/head.tsx
import React from 'react';
import Head from 'next/head';

export default function HeadComponent() {
  return (
    <Head>
      <title>Google!</title>
      <meta name="description" content="Google" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://www.googletagmanager.com/gtag/js?id=G-8Y0XBRKL31&amp;cx=c&amp;_slc=1" async></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8Y0XBRKL31');
        `,
      }} />
    </Head>
  );
}
