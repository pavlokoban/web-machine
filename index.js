// Import the Nodemailer library
const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // use false for STARTTLS; true for SSL on port 465
  auth: {
    user: 'webmachinerocks@gmail.com', // ваш email
        pass: 'qjrsklkopkqjinve', // ваш пароль
  }
});

// Configure the mailoptions object
const mailOptions = {
    from: 'webmachinerocks@gmail.com', // От кого
    to: 'pavlokoban@icloud.com', // Кому
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

// Send the email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent: ', info.response);
  }
});