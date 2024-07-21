import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    const services = formData.getAll('services');
    const budget = formData.get('budget') as string;
    const task = formData.get('task') as string;
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const phone = formData.get('phone') as string;
    const file = formData.get('file') as File | null;

    // Логирование данных формы
    console.log('Received form data:', {
      services,
      budget,
      task,
      name,
      email,
      message,
      phone,
      file,
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New message from ${name}`,
      text: `Services: ${services.join(', ')}\nBudget: ${budget}\nTask: ${task}\nMessage: ${message}\nPhone: ${phone}`,
      attachments: file
        ? [
            {
              filename: file.name,
              content: Buffer.from(await file.arrayBuffer()),
              contentType: file.type,
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error in API route:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error', details: (error as Error).message }), { status: 500 });
  }
};
