import nodemailer from 'nodemailer';

export const POST = async (req: Request) => {
  try {
    console.log('Received request method:', req.method);
    const formData = await req.json();
    console.log('Parsed form data:', formData);

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

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error in API route:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error', details: error.message }), { status: 500 });
  }
};
