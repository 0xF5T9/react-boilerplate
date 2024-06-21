/**
 * @file app.js
 * @description Start the web-server using Express.
 */

const express = require('express'),
    // fs = require('fs'),
    path = require('path'),
    app = express(),
    port = 8317;

app.use(express.static(path.join(__dirname, 'public')));

// Path configuration to respond to a request to static route request by serving 'index.html'
// React router won't work without this.
// https://stackoverflow.com/questions/44491184/react-router-does-not-work-in-production-and-surge-deployments
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(function (error, req, res, next) {
    res.status(500).send('500: Internal Server Error');
});

app.listen(port, function () {
    console.log(`Running at port ${port}.`);
});
