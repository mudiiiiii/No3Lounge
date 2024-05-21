require('dotenv').config();
const express = require("express");

const app = express();

const dbConfig = require('./db');

app.use(bodyParser.json());
app.use('/api', reservationRoutes);  

const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;



app.listen(port, () => console.log('Server is now running '));