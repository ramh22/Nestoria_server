import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import { templeteEmail } from './emailTemplete.js';

async function sendEmail2({ email, subject, message }) {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 's4alpy@gmail.com',
      pass: 'ejsh gyoe lnuj zrqf', // Make sure this is correct
    },
    tls: {
      rejectUnauthorized: false, // Ignore self-signed certificates
    },
  });

  // Create a JWT token (you might want to adjust how this token is created and used)
  const token = jwt.sign({ email }, 'furnitureapp', { expiresIn: '10m' });

  // Send email with defined transport object
  const info = await transporter.sendMail({
    from: '"My App👻" <s4alpy@gmail.com>',
    to: email, // Email address should be passed correctly
    subject: subject, // Subject from the function parameter
    text: message, // Message from the function parameter
    
  });

  console.log('Message sent: %s', info.messageId);
}

export default sendEmail2;