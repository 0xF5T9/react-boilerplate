/**
 * @file server.js
 * @description Start the application using Express.
 */

'use strict';

// Built-in module(s).
const path = require('path'),
    rootPath = path.resolve(process.cwd());

// External module(s).
const express = require('express');

// Express configurations.
const app = express();
app.use(express.static(path.join(rootPath, 'public'))); // Serves static files from '/public'

// Routes:
app.get('/*', (request, result) => {
    // Passes routes to React Router.
    result.sendFile(path.join(rootPath, 'public', 'index.html'));
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
    console.log(`Root directory: ${rootPath}`);
    console.log(`Application is listening on port ${port}.`);
});
