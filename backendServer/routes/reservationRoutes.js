const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservations');  // Ensure path correctness based on your project structure

// Route to handle POST request for new reservations
router.post('/reserve', async (req, res) => {
    try {
        const { numberOfPeople, date, time, name, emailAddress, phoneNumber } = req.body;
        
        const newReservation = new Reservation({
            numberOfPeople: parseInt(numberOfPeople),
            date: new Date(date),  // Ensure the date format from frontend matches or handle conversion
            time,
            name,
            emailAddress,
            phoneNumber
        });

        await newReservation.save();
        res.status(201).json({ message: "Reservation successful", reservation: newReservation });
    } catch (error) {
        console.error("Reservation creation failed:", error);
        res.status(400).json({ message: "Reservation failed", error: error.message });
    }
});

module.exports = router;
