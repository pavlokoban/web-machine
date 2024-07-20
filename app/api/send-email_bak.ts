import nodemailer from 'nodemailer';
//import type { NextApiRequest, NextApiResponse } from 'next';

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const formData = req.body;

    // Настройка отправки почты
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'webmachinerocks@gmail.com',
        pass: 'qjrsklkopkqjinve',
      },
    });

    const mailOptions = {
      from: 'webmachinerocks@gmail.com',
      to: 'pavlokoban@icloud.com',
      subject: 'New Contact Form Submission',
      text: JSON.stringify(formData, null, 2),
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
