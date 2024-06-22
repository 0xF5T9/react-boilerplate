/**
 * @file app.js
 * @description Start the application using Express.
 */

'use strict';

// Built-in module(s).
const path = require('path');

// External module(s).
const express = require('express');

// Express configurations.
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

// Routes:
app.get('/*', (request, result) => {
    // Path configuration to respond to a request to static route request by serving 'index.html'
    // React router won't work without this.
    // https://stackoverflow.com/questions/44491184/react-router-does-not-work-in-production-and-surge-deployments
    result.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error-handling middleware.
app.use((error, request, result, next) => {
    console.error(
        `THIS ERROR IS CAPTURED BY THE DEFAULT ERROR-HANDLING MIDDLEWARE.\n`,
        error
    );
    result.status(error.status || 500).json({ message: error.message });
});

// Launch server.
const port = 8317;
app.listen(port, function () {
    console.log(`Application is listening on port ${port}.`);
});
