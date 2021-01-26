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

const rootController = require("./routes/index");
const catsController = require("./routes/cats");
const dogsController = require("./routes/dogs");
const catsAndDogsController = require("./routes/cats_and_dogs")

app.use('/', rootController);
app.use('/cats', catsController);
app.use('/dogs', dogsController);
app.use('/cats_and_dogs', catsAndDogsController);