// app/contact/page.tsx
import React from 'react';
import LayoutMainRus from '@/components/LayoutMainRus';
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import { Metadata } from 'next';
import Link from 'next/link';
import OfficeLocationsRus from '@/components/officelocations/OfficeLocationsRus';
import ImageRow from '@/components/imagerow/ImageRow';
import Image from 'next/image';


export const metadata: Metadata = {
    title: "ᐈ Контактная информация - WEB-MACHINE",
    description: "⭐ Мы всегда на связи! Оставить заявку на разработку, продвижение сайта в WEB-MACHINE",
    alternates: {
      canonical: "https://web-machine.rocks/ru/contact/",
      languages: {
        en: "https://web-machine.rocks/contact/",
        ru: "https://web-machine.rocks/ru/contact/",
        uk: "https://web-machine.rocks/uk/contact/",
      },
    },
  };


const ContactPageRu = () => {
  return (
    <>
      <LayoutMainRus>
      <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <h1 className={'unbounded'}>Рады поработать с Вами!</h1>
        <div className='desc-flex-mob-block'>
        <div className='desc-col-2-50-mob-1-100'>
        <p style={{marginTop:'10px'}}>Оставьте заявку через форму, либо через указанные контактные данные и мы будем рады ответить Вам по интересующим вопросам!</p>
        <div>
        <div className="social-links">
              <a href="https://www.linkedin.com/in/pavlosokolenko/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/team/pavlo-sokolenko.webp" alt="LinkedIn CEO" />
              </a>
              <a href="https://www.linkedin.com/in/dmytro-petrushenko/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/team/1644932312854.jpeg" alt="LinkedIn COO" />
              </a>
              <a href="https://www.linkedin.com/in/margarita-melikyan-6a2036160/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/team/1521754615526.jpeg" alt="LinkedIn SEO" />
              </a>
              <a href="https://www.linkedin.com/in/irina-pelipko-92098152/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/team/1647853856121.jpeg" alt="LinkedIn CMO" />
              </a>
          </div>
          <p>Также Вы можете написать нам в LinkedIn.</p>
          </div>
        </div>
        <div className='desc-col-2-50-mob-1-100'>
        <div><p>Телефон: <Link className={'a-anim a-in-text-6-600'} href="tel:+11111111111">+1(234)112-67-67</Link></p></div>
        <div><p>Email: <Link className={'a-anim a-in-text-6-600'} href="mailto:hello@web-machine.rocks">hello@web-machine.rocks</Link></p>
        </div>
        <div className='space20'></div>
        <OfficeLocationsRus />

            </div>

          </div>

          <div className={'desc-space-120-mob-20'}></div>

          <ImageRow />
          <div className='space20'></div>
        <hr></hr>
        <ContactFormRus />
        </div>
      </LayoutMainRus>
    </>
  );
};

export default ContactPageRu;