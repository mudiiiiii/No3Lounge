const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedbacks'); // Adjust the path as necessary

// GET feedback
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
        await feedback.save();
        res.status(201).json({ message: "Feedback submitted successfully!" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
