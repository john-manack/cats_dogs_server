'use strict';

const HTTP = require("http");

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

const express = require('express');
const app = express();

const SERVER = HTTP.createServer(app);

SERVER.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`)
});

