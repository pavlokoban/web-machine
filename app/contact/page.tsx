// app/contact/page.tsx
import React from 'react';
import LayoutMain from '@/components/LayoutMain';
import ContactForm from '@/components/contact-form/ContactForm';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Contact page | Web Machine Rocks!',
  };


const ContactPage = () => {
  return (
    <>
      <LayoutMain>
      <div id="content-container" className="relative z-0 container mx-auto p-10 px-10 m-10">
        <h1 className={'unbounded centered-texts'}>Contact Us</h1>
        <div className={'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'}>
    <p>email</p>
    <p>phone</p>
    <p>address</p>
        </div>
        <ContactForm />
        </div>
      </LayoutMain>
    </>
  );
};

export default ContactPage;