'use client';
import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import emailjs from "@emailjs/browser";
import Footer from '../footer/Footer';
import Link from 'next/link';

const ContactFormRus: React.FC = () => {
  const [formData, setFormData] = useState<{
    services: string[],
    budget: string,
    task: string,
    name: string,
    email: string,
    message: string,
    phone: string,
  }>({
    services: [],
    budget: '',
    task: '',
    name: '',
    email: '',
    message: '',
    phone: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((service) => service !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      from_name: formData.email,
      to_name: "WebMachine team",
      message: formData.message,
      budget: formData.budget,
      services: formData.services,
      phone: formData.phone,
      name: formData.name,
      task: formData.task,
      email: formData.email,
    };

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
      );

      if (response.status === 200) {
        setShowModal(true);
        setModalMessage('Thank you! Your request has been received. We will contact you soon.');
        setFormData({
          services: [],
          budget: '',
          task: '',
          name: '',
          email: '',
          message: '',
          phone: '',
        });
      } else {
        setShowModal(true);
        setModalMessage('There was an error submitting the form.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setShowModal(true);
      setModalMessage('There was an error submitting the form.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <h2 className='h3ash1'>Оставить заявку</h2>
        <p>Расскажите нам о своем проекте, и мы воплотим его в жизнь. Заполните форму и отправьте письмо на адрес: <Link className={'a-anim a-in-text-6-600'} href="mailto:hello@web-machine.rocks">hello@web-machine.rocks</Link></p>

        <h3>Услуги</h3>
        <div className={styles.options}>
          {['разработка сайта', 'дизайн', 'SEO', 'реклама', 'прочее'].map((service) => (
            <label key={service} className={`${styles.option} ${formData.services.includes(service) ? styles.selected : ''}`}>
              <input
                type="checkbox"
                name="services"
                value={service}
                checked={formData.services.includes(service)}
                onChange={handleChange}
              />
              <span>{service}</span>
            </label>
          ))}
        </div>

        <h3>Бюджет</h3>
        <div className={styles.options}>
          {['меньше $1k', '$1k-3k', '$3k-7k', '$7k-10k', '$10k+'].map((budget) => (
            <label key={budget} className={`${styles.option} ${formData.budget === budget ? styles.selected : ''}`}>
              <input
                type="radio"
                name="budget"
                value={budget}
                checked={formData.budget === budget}
                onChange={handleChange}
              />
              <span>{budget}</span>
            </label>
          ))}
        </div>

        <h3>Задача</h3>
        <textarea
          className={styles.textarea}
          name="task"
          placeholder="Описание задачи (необязательно)"
          value={formData.task}
          onChange={handleChange}
        />

        <div className={'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'}>

        <div className={styles.inputGroup}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
            required
            pattern="^[A-Za-zА-Яа-яЁё\s]{3,12}$"
          />
        </div>

        <div className={styles.inputGroup}>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Ваш Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <input
            className={styles.input}
            type="text"
            name="message"
            placeholder="Сообщение"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <input
            className={styles.input}
            type="tel"
            name="phone"
            placeholder="+1"
            value={formData.phone}
            onChange={handleChange}
            pattern="\+\d{1,15}"
            required
          />
        </div>
        </div>

       <button type="submit" className={`${styles.submitButton}`}>
          <span className={styles.buttonText}>Отправить</span>
          <span className={styles.buttonWaves}></span>
        </button>
        <p className={styles.privacyText}>
        Отправляя этот запрос, вы соглашаетесь, что ваши данные будут храниться и обрабатываться сайтом. Для получения дополнительной информации, пожалуйста, ознакомьтесь с нашей Политикой конфиденциальности.
        </p>
      </form>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>{modalMessage === 'Спасибо! Ваш запрос получен. Мы свяжемся с вами в ближайшее время.' ? 'Спасибо!' : 'Ошибка'}</h2>
            <p>{modalMessage}</p>
            <button onClick={() => setShowModal(false)}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactFormRus;
