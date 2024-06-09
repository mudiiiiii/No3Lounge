const {IpFilter } = require('express-ipfilter');
const allowedIps = [
    '192.168.1.107', // Your IPv4
    '2001:56a:7d0d:3c00:a239:b52e:cb69:5179', // Example IPv6
    '::1', // Localhost IPv6
    '127.0.0.1', // Localhost IPv4
    'fe80::c849:173:d64e:d58b%20' // Your link-local IPv6 (may need to adjust the format)
];

// Custom middleware for IP filtering based on request type
function adminIpFilter(req, res, next) {
    console.log("Request IP:", req.ip); // Log the IP address of the incoming request

    const adminPaths = ['/api/applications', '/api/reservations', '/api/feedbacks'];
    const isAdminPath = adminPaths.includes(req.path);
    const isAdminRequest = req.method === 'GET'; 

    if (isAdminPath && isAdminRequest) {
        const ipFilter = IpFilter(allowedIps, {
            mode: 'allow', 
            log: true, 
            logLevel: 'deny',
            detectIp: function (req) {
                const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
                console.log("Detected IP:", ip); // Log the detected IP
                return ip;
            }
        });
        return ipFilter(req, res, next);
    }
    next();
}




require('dotenv').config();
const express = require("express");
const path = require('path');
const app = express();
const cors = require('cors');

require('./db');
const bodyParser = require('body-parser');
const reservationRoutes = require('./routes/reservationRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');


app.use(adminIpFilter);
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
