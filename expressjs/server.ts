/**
 * @file server.ts
 * @description Start the web-server using Express.
 */

'use strict';
import dotenv from 'dotenv';
dotenv.config({
    path: '.env',
});

import path from 'path';
import express, { ErrorRequestHandler } from 'express';
import rateLimit from 'express-rate-limit';
import expressConfig from '../configs/express.json';

const rootPath = path.resolve(process.cwd());

const app = express();

// Trust proxy: If this server is meant to be run behind a proxy,
// set the trust level accordingly so the rate limiter won't complaint.
app.set('trust proxy', 1);

// Serves static files.
app.use(express.static(path.join(rootPath, 'public')));

// Rate limiter configurations.
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests 15 minutes
    standardHeaders: 'draft-7',
    legacyHeaders: false,
});
app.use(limiter);

// Routes:
app.get('/*', (request, response, next) => {
    // Passes routes to the react router as this project is using client-side routing.
    response.sendFile(path.join(rootPath, 'public', 'index.html'));
});

// Error-handling middleware.
const errorHandler: ErrorRequestHandler = function (
    error,
    request,
    response,
    next
) {
    console.error(error);
    switch (error.errno) {
        case -4058:
            console.log(
                '\nThe project may not have been built yet, or a previous build was corrupted.'
            );
            break;
        default:
            break;
    }
    response.status(500).json({ message: 'Unexpected server error occurred.' });
};
app.use(errorHandler);

// Launch server.
app.listen(expressConfig.port, () => {
    console.log(`Root directory: ${rootPath}`);
    console.log(`Application is listening on port ${expressConfig.port}.`);
});
