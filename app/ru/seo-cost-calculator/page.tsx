// app/contact/page.tsx
import React from 'react';
import LayoutMainRus from '@/components/LayoutMainRus';
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import { Metadata } from 'next';
import Link from 'next/link';
import OfficeLocationsRus from '@/components/officelocations/OfficeLocationsRus';
import ImageRow from '@/components/imagerow/ImageRow';
import SEOCalculatorRus from '@/components/seocalculator/SEOCalculatorRus';


export const metadata: Metadata = {
    title: "SEO калькулятор онлайн — цены и стоимость продвижения сайта в Украине",
    description: "⭐ Сколько стоит раскрутить сайт? Цены на продвижение сайта и стоимость SEO в Украине (Киев, Харьков, Одесса, Днепр)? Ответ здесь ➤ SEO калькулятор онлайн.",
    alternates: {
      canonical: "https://web-machine.rocks/ru/seo-cost-calculator/",
      languages: {
        en: "https://web-machine.rocks/seo-cost-calculator/",
        ru: "https://web-machine.rocks/ru/seo-cost-calculator/",
        uk: "https://web-machine.rocks/uk/seo-cost-calculator/",
      },
    },
  };


const ContactPageRu = () => {
  return (
    <>
      <LayoutMainRus>
      <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <SEOCalculatorRus />
        <div className='space20'></div>
        <hr></hr>
        <div className='space20'></div>
        <p>Сервис SEO калькулятора постоянно дорабатывается и улучшается, поэтому любые рекомендации пользователей как по технической, так и по информационной составляющей для нас крайне важны. Замечания и предложения по улучшению работы SEO калькулятора™ — отправляйте на почтовый ящик: hello@web-machine.rocks. Заранее благодарим!</p>
        <div className='space20'></div>
        </div>

        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <ContactFormRus />
        </div>
      </LayoutMainRus>
    </>
  );
};

export default ContactPageRu;