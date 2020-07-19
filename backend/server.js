'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const createError = require('http-errors');
const appRouter = require('./api/routes');

const server = express();
const corsOptions = cors.CorsOptions = {
    allowedHeaders: ["Content-Type"],
    credentials: true,
    methods: "GET,POST",
    origin: '*'
};
server.use(bodyParser.json());
server.use(cors(corsOptions));
const port = process.env.PORT || 3000;
const host = 'localhost';
server.use('/', appRouter);
server.listen(port, host);
console.log(`User API server running on Port ${port}...`);

module.exports = server;