'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const appRouter = require('./api/routes');

const app = express();
const corsOptions = cors.CorsOptions = {
    allowedHeaders: ["Content-Type"],
    credentials: true,
    methods: "GET,POST",
    origin: '*'
};
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(function (err, req, res, next) {
    console.log("Error Occured. details:", err.stack);
    next();
});
const port = process.env.PORT || 3000;
const host = 'localhost';
app.use('/', appRouter);
app.listen(port, host);
console.log(`User API server running on Port ${port}...`);

module.exports = app;