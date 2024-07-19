import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const formData = req.body;

    // Настройка отправки почты
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'webmachinerocks@gmail.com', // ваш email
          pass: 'Jerusalem112', // ваш пароль
        },
    });

    const mailOptions = {
        from: 'webmachinerocks@gmail.com', // От кого
        to: 'pavlokoban@icloud.com', // Кому
      subject: 'New Contact Form Submission', // Тема
      text: JSON.stringify(formData, null, 2), // Текст письма
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default sendEmail;
