require('dotenv').config();
const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const router = express.Router();
const applications = require('../models/applications');


// // Set up storage for file uploads
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, 'uploads/');  // Make sure this directory exists
//     },
//     filename: function(req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.').pop());
//     }
// });

const upload = multer({ storage: multer.memoryStorage() });

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    //service: 'gmail',  // This example uses Gmail. Adjust as necessary for your service provider.
    auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASSWORD // Your email password
    }
});

// Route to handle job application form submission
router.post('/apply', upload.single('cv'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const { job, first_name, last_name, email, phone, previous_role, years_worked, work_summary } = req.body;
    const { file } = req;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.TO_USER, 
        replyTo: email, 
        subject: `New Job Application for ${job}`,
        text: `A new job application has been submitted.\n\nDetails:\nPosition: ${job}\nFirst Name: ${first_name}\nLast Name: ${last_name}\nEmail: ${email}\nPhone: ${phone}\nPrevious Role: ${previous_role}\nYears Worked: ${years_worked}\nSummary of Work: ${work_summary}`,
        attachments: [
            {
                filename: file.originalname,
                content: file.buffer
            }
        ]
    };

    // Log incoming data
    console.log('Received job application with the following details:');
    console.log('Job:', req.body.job);
    console.log('First Name:', req.body.first_name);
    console.log('Last Name:', req.body.last_name);
    console.log('Email:', req.body.email);
    console.log('Phone:', req.body.phone);
    console.log('Previous Role:', req.body.previous_role);
    console.log('Years Worked:', req.body.years_worked);
    console.log('Work Summary:', req.body.work_summary);
    console.log('CV File:', req.file ? req.file.originalname : 'No file uploaded');

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        // Create a new application document and save it to the database
    const newApplication = new applications({
        job,
        first_name,
        last_name,
        email,
        phone,
        previous_role,
        years_worked,
        work_summary,
        cv: file.originalname // Storing the filename, adjust as necessary
    });

    await newApplication.save(); // Save the application to the database

    res.status(200).send('Application submitted and saved successfully!');
} catch (error) {
    console.error('Error sending email or saving to database: ', error);
    res.status(500).send('Failed to send application or save data.');
}
});

module.exports = router;