const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const Feedback = require('../models/feedbacks'); // Adjust the path as necessary

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

// GET feedbacks
router.get('/feedbacks', async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.json(feedbacks);
    } catch (err) {
        res.status(500).send(err);
    }
});

// POST feedback
router.post('/feedback', async (req, res) => {
    try {
        const feedback = new Feedback({
            question1: req.body.question1,
            question2: req.body.question2,
            question3: req.body.question3,
            question4: req.body.question4,
            question5: req.body.question5,
            question6: req.body.question6,
            question7: req.body.question7,
            question8: req.body.question8,
            question9: req.body.question9,
            question10: req.body.question10
        });

        // Save feedback to the database
        const savedFeedback = await feedback.save();

        // Setup email data
        const mailOptions = {
            from: '"No3 Lounge" <admin@no3lounge.com>', // sender address
            to: 'admin@no3lounge.com, feedback@no3lounge.com',  // list of receivers
            subject: 'New Feedback Form Submission', // Subject line
            text: `You have a new feedback form submission.\n\n
            Question1: ${req.body.question1}\n
            Question2: ${req.body.question2}\n
            Question3: ${req.body.question3}\n
            Question4: ${req.body.question4}\n
            Question5: ${req.body.question5}\n
            Question6: ${req.body.question6}\n
            Question7: ${req.body.question7}\n
            Question8: ${req.body.question8}\n
            Question9: ${req.body.question9}\n
            Question10: ${req.body.question10}`, // plain text body
            html: `<p>You have a new feedback form submission.</p>
            <p><strong>Question1:</strong> ${req.body.question1}</p>
            <p><strong>Question2:</strong> ${req.body.question2}</p>
            <p><strong>Question3:</strong> ${req.body.question3}</p>
            <p><strong>Question4:</strong> ${req.body.question4}</p>
            <p><strong>Question5:</strong> ${req.body.question5}</p>
            <p><strong>Question6:</strong> ${req.body.question6}</p>
            <p><strong>Question7:</strong> ${req.body.question7}</p>
            <p><strong>Question8:</strong> ${req.body.question8}</p>
            <p><strong>Question9:</strong> ${req.body.question9}</p>
            <p><strong>Question10:</strong> ${req.body.question10}</p>`, // html body
        };

        // Send mail
        await transporter.sendMail(mailOptions);

        res.status(201).json({ message: "Feedback submitted and email sent successfully!" });
    } catch (error) {
        console.error('Error:', error);
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
