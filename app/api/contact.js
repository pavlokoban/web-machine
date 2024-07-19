import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { services, budget, task, name, email, message, phone, file } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail', // или используйте другой почтовый сервис
      auth: {
        user: 'webmachinerocks@gmail.com', // ваш email
        pass: 'Jerusalem112', // ваш пароль
      },
    });

    const mailOptions = {
      from: 'webmachinerocks@gmail.com',
      to: 'pavlokoban@icloud.com',
      subject: 'New Contact Form Submission',
      text: `
        Services: ${services.join(', ')}
        Budget: ${budget.join(', ')}
        Task: ${task}
        Name: ${name}
        Email: ${email}
        Message: ${message}
        Phone: ${phone}
      `,
      attachments: file ? [{
        filename: file.name,
        content: file,
        encoding: 'base64',
      }] : [],
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to send email', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
