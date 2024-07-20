import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.json();

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

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error in API route:', error);

    // Приведение типа error к объекту с полем message, если это возможно
    const errorMessage = (error instanceof Error) ? error.message : 'Unknown error';

    return new Response(JSON.stringify({ error: 'Internal Server Error', details: errorMessage }), { status: 500 });
  }
};
