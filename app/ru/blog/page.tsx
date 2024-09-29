
import * as React from 'react';
import type { Metadata } from "next";
import LayoutMainRus from "@/components/LayoutMainRus";
import ContactFormRus from '@/components/contact-form/ContactFormRus';
import PageBlogRuInner from './PageBlogRuInner';

export const metadata: Metadata = {
  title: "Справочник интернет-маркетолога | блог об интернет-маркетинге",
  description: "Справочник интернет-маркетолога, блог об интересных события и тенденциях в мире интернет-маркетинга и SEO",
  alternates: {
    canonical: "https://web-machine.rocks/ru/blog",
    languages: {
      en: "https://web-machine.rocks/blog",
      ru: "https://web-machine.rocks/ru/blog",
      uk: "https://web-machine.rocks/uk/blog",
    },
  },
};

const BlogRu = () => {

  return (
    <>
    <LayoutMainRus>
    <div className="relative z-10 container mx-auto p-10 px-10 m-10 w-100">
          <h1 className={'unbounded'}>Справочник интернет-маркетолога</h1>
          <h4 className={''}>В нашем блоге мы пишем об интернет-маркетинге, создании сайтов, видеорекламе, продвижении сайтов, онлайн-рекламе, продвижении в социальных сетях, рынках</h4>   
    <div>
      
     <PageBlogRuInner />
 
    </div>
    </div>
        <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10 border-36 white112 desc-padding-70-mob-30">
        <ContactFormRus />
        </div>
    </LayoutMainRus>
</>
  );
};

export default BlogRu;