import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import axios from 'axios';

interface FormData {
  services: string[];
  budget: string;
  task: string;
  name: string;
  email: string;
  message: string;
  phone: string;
  file: File | null;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    services: [],
    budget: '',
    task: '',
    name: '',
    email: '',
    message: '',
    phone: '',
    file: null,
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    const files = (e.target as HTMLInputElement).files;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev.services, value]
          : prev.services.filter((service) => service !== value),
      }));
    } else if (type === 'file' && files) {
      setFormData((prev) => ({ ...prev, file: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((val) => formDataToSend.append(key, val));
        } else {
          formDataToSend.append(key, value as string | Blob);
        }
      });

      const response = await axios.post('/api/send-email', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setShowModal(true);
        setFormData({
          services: [],
          budget: '',
          task: '',
          name: '',
          email: '',
          message: '',
          phone: '',
          file: null,
        });
      } else {
        alert('Произошла ошибка при отправке формы');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Произошла ошибка при отправке формы');
    }
  };

  return (
    <div>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <h2>Let’s do something awesome!</h2>
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

        <label className={styles.fileLabel}>
          Add File
          <input
            type="file"
            className={styles.fileInput}
            accept=".pdf,.txt,.doc,.docx,.jpeg,.fig,.png"
            onChange={handleChange}
          />
        </label>

        <div className={styles.inputGroup}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            pattern="^[A-Za-z\s]{3,12}$"
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

        <button type="submit" className={`${styles.submitButton} telegramim_pulse`}>
          <span className={styles.buttonText}>Send</span>
          <span className={styles.buttonWaves}></span>
        </button>
        <p className={styles.privacyText}>
          By sending this request, you agree that your data will be stored and processed by the website. For more information, please read our Privacy Policy.
        </p>
      </form>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <p>Thank you for your request! We will contact you shortly.</p>
            <button onClick={() => setShowModal(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
