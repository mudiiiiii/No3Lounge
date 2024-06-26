const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // Use environment variable for user
    pass: process.env.EMAIL_PASSWORD, // Use environment variable for password
  },
});

// POST route to handle contact form submissions
router.post('/contact', async (req, res) => {
  const { name, number, email, message} = req.body;

  // Setup email data
  const mailOptions = {
    from: '"No3 Lounge" <admin@no3lounge.com>', // sender address
    to: 'admin@no3lounge.com, info@no3lounge.com',  // list of receivers
    subject: 'New Contact Form Submission', // Subject line
    text: `You have a new contact form submission from ${name}.\n\nPhone: ${number}\nEmail: ${email}\nMessage: ${message}`, // plain text body
    html: `<p>You have a new contact form submission from <strong>${name}</strong>.</p>
           <p><strong>Phone:</strong> ${number}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>`, // html body
  };

  try {
    // Send mail
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

module.exports = router;
