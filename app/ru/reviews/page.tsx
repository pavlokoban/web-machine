// app/contact/page.tsx
import React from 'react';
import LayoutMainRus from '@/components/LayoutMainRus';
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import { Metadata } from 'next';
import BrandSectionRu from '@/components/brandsection/BrandSectionRu';
import TestimonialsAllRu from '@/components/testimonials/TestimonialsAllRu';

export const metadata: Metadata = {
    title: "Отзывы о работе агентства интернет-маркетинга WEB-MACHINE",
    description: "Ознакомьтесь с отзывами наших клиентов - это лучшее подтверждение качества наших работ, профессионализма, сервиса и умения достигать цели.",
    alternates: {
      canonical: "https://web-machine.rocks/ru/reviews/",
      languages: {
        en: "https://web-machine.rocks/reviews/",
        ru: "https://web-machine.rocks/ru/reviews/",
        uk: "https://web-machine.rocks/uk/reviews/",
      },
    },
  };

const ReviewsPageRu = () => {
  return (
    <>
      <LayoutMainRus>
      <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <h1 className={'unbounded'}>Отзывы клиентов</h1>
        <p style={{marginTop:'10px'}}>Ознакомьтесь с отзывами наших клиентов — подтверждением качества наших услуг</p>
        <br></br>
        <TestimonialsAllRu />
        <div className='space60'></div>
        </div>
        <div className='space80'></div>
        <div className="relative w-full overflow-hidden white112">
        <div className='relative z-0 blackblock mx-auto p-10 px-10 m-10'>
          <div className='fake-container'>
          <h2 className='h3ash1'>Мыслим масштабно!</h2>
          <p>Среди наших клиентов по разработке, интернет-маркетингу и комплексному продвижению в Украине такие компании как имеющие свой отдел маркетинга, так и компании, с которыми мы работаем как аутсорсинговый отдел digital-маркетинга.<br>
          </br>География ключевых клиентов: Украина, Великобритания, Китай, США, Эстония, Австралия, Польша, Канада.</p>
          <div className='space20'></div>
          <BrandSectionRu />
          </div>
        </div>

        <div id="content-container" className='relative z-0 container mx-auto p-10 px-10 m-10'>
        <div id="contact-form-here"></div>
        <ContactFormRus />

      </div>
      </div>

    </LayoutMainRus>
    </>
  );
};

export default ReviewsPageRu;