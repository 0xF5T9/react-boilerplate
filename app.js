const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')));

// Handle 404
app.use(function (req, res) {
    // Search for 404.html
    fs.readFile(path.join(__dirname, 'public', '404.html'), 'utf8', function (err, data) {
        if (err) {
            // 404.html not found, send simple error message
            res.status(404).send('404: Page Not Found');
        } else {
            // Redirect 404 to root
            // res.redirect('/');

            // Or show 404.html
            res.status(404).send(data);
        }
    });
});

// Handle 500
app.use(function (error, req, res, next) {
    res.status(500).send('500: Internal Server Error');
});

app.listen(80, function () {
    console.log('Running at port 80.');
});