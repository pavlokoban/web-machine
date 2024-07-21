import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
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
        <h2 className='h3ash1'>Let’s do something awesome!</h2>
        <p>Tell us about your project and we will make it true. Fill out the form and send an email to hello@web-machine.rocks</p>

        <h3>Services</h3>
        <div className={styles.options}>
          {['web-development', 'design', 'promotion', 'other'].map((service) => (
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

        <h3>Budget</h3>
        <div className={styles.options}>
          {['less than $1k', '$1k-3k', '$3k-7k', '$7k+'].map((budget) => (
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

        <h3>Task</h3>
        <textarea
          className={styles.textarea}
          name="task"
          placeholder="Description (optional)"
          value={formData.task}
          onChange={handleChange}
        />

        <div className={'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'}>

        <div className={styles.inputGroup}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Your Name"
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
            placeholder="Your Email"
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
            placeholder="Message"
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
          <span className={styles.buttonText}>Send</span>
          <span className={styles.buttonWaves}></span>
        </button>
        <p className={styles.privacyText}>
          By sending this request, you agree that your data will be stored and processed by the website. For more information, please read our Privacy Policy.
        </p>
      </form>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>{modalMessage === 'Thank you! Your request has been received. We will contact you soon.' ? 'Thank you!' : 'Error'}</h2>
            <p>{modalMessage}</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
