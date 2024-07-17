import React, { useState } from 'react';

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here should be logic for submitting the form data, e.g. sending it to a server
  };

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <h2>Let’s do something awesome!</h2>
      <p>Tell us about your project and we will make it true. Fill out the form and send an email to hello@web-machine.rocks</p>

      <h3>Services</h3>
      <div className="options">
        {['web-development', 'design', 'promotion', 'other'].map((service) => (
          <label key={service} className={`option ${formData.services.includes(service) ? 'selected' : ''}`}>
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
      <div className="options">
        {['less than $1k', '$1k-3k', '$3k-7k', '$7k+'].map((budget) => (
          <label key={budget} className={`option ${formData.budget === budget ? 'selected' : ''}`}>
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
        className="textarea"
        name="task"
        placeholder="Description (optional)"
        value={formData.task}
        onChange={handleChange}
      />

      <label className="fileLabel">
        Add File
        <input
          type="file"
          className="fileInput"
          accept=".pdf,.txt,.doc,.docx,.jpeg,.fig,.png"
          onChange={handleChange}
        />
      </label>

      <div className="inputGroup">
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          pattern="^[A-Za-z\s]{3,12}$"
        />
      </div>

      <div className="inputGroup">
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="inputGroup">
        <input
          className="input"
          type="text"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <div className="inputGroup">
        <input
          className="input"
          type="tel"
          name="phone"
          placeholder="+1"
          value={formData.phone}
          onChange={handleChange}
          pattern="\+\d{1,15}"
          required
        />
      </div>

      <button type="submit" className="submitButton telegramim_pulse">
        <span className="buttonText">Start</span>
        <span className="buttonWaves"></span>
      </button>
      <p className="privacyText">
        By sending this request, you agree that your data will be stored and processed by the website. For more information, please read our Privacy Policy.
      </p>
    </form>
  );
};

export default ContactForm;
