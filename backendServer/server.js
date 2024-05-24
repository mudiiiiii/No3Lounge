require('dotenv').config();
const express = require("express");
const path = require('path');
const app = express();

require('./db');
const bodyParser = require('body-parser');
const reservationRoutes = require('./routes/reservationRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use('/api', reservationRoutes);  
app.use('/api', applicationRoutes); 
app.use('/api', feedbackRoutes);

// Serve static files from the React app in production
app.use(express.static(path.join(__dirname, '../client/Delici/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/Delici/build', 'index.html'));
});

const port = process.env.PORT || 5000; // Can be set through an environment variable for flexibility
app.listen(port, () => console.log(`Server is now running on http://localhost:${port}`));
