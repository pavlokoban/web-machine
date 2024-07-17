import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    services: [],
    budget: '',
    task: '',
    name: '',
    email: '',
    message: '',
    phone: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: checked ? [...prev[name], value] : prev[name].filter((v) => v !== value),
      }));
    } else if (type === 'radio') {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else if (type === 'file') {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    const nameRegex = /^[A-Za-z]{3,12}$/;
    const phoneRegex = /^\+\d+$/;
    const taskRegex = /^[A-Za-z0-9 ]*$/; // allows only letters, numbers, and spaces

    if (!nameRegex.test(formData.name)) {
      alert('Name must be between 3 and 12 characters, and contain only letters.');
      return;
    }
    if (!phoneRegex.test(formData.phone)) {
      alert('Phone must be in the format +1234567890.');
      return;
    }
    if (!taskRegex.test(formData.task)) {
      alert('Task can only contain letters, numbers, and spaces.');
      return;
    }

    // Send form data to server
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Thank you for request! We'll contact you soon");
    } else {
      alert('Failed to send your request. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <h2>Let’s do something awesome!</h2>
      <p>Tell us about your project and we will make it true. Fill out the form and send an email to hello@web-machine.rocks</p>

      <div>
        <h3>Services</h3>
        <div className={styles.options}>
          {['web-development', 'design', 'promotion', 'other'].map((service) => (
            <label key={service} className={styles.option}>
              <input
                type="checkbox"
                name="services"
                value={service}
                onChange={handleChange}
              />
              <span>{service}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3>Budget</h3>
        <div className={styles.options}>
          {['less than $1k', '$1k-3k', '$3k-7k', '$7k+'].map((budget) => (
            <label key={budget} className={styles.option}>
              <input
                type="radio"
                name="budget"
                value={budget}
                onChange={handleChange}
              />
              <span>{budget}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3>Task</h3>
        <textarea
          name="task"
          placeholder="Description (optional)"
          value={formData.task}
          onChange={handleChange}
          className={styles.textarea}
        />
      </div>

      <div>
        <label className={styles.fileLabel}>
          <input
            type="file"
            accept=".pdf,.txt,.doc,.docx,.jpeg,.jpg,.png,.fig"
            className={styles.fileInput}
            onChange={handleChange}
          />
          Add File
        </label>
      </div>

      <div className={styles.inputGroup}>
        <input
          type="text"
          name="name"
          placeholder="your name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>
      <div className={styles.inputGroup}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>
      <div className={styles.inputGroup}>
        <input
          type="text"
          name="message"
          placeholder="message"
          value={formData.message}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.inputGroup}>
        <input
          type="text"
          name="phone"
          placeholder="+1"
          value={formData.phone}
          onChange={handleChange}
          pattern="^\+\d+$"
          required
          className={styles.input}
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        <span className={styles.buttonText}>Start</span>
        <span className={styles.buttonEffect}></span>
      </button>

      <p className={styles.privacyText}>
        By sending this request, you agree that your data will be stored and processed by the website. For more information, please read our Privacy Policy.
      </p>
    </form>
  );
};

export default ContactForm;
