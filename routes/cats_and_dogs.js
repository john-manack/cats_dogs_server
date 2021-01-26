'use strict';

const { get } = require('.');

const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.send('Dogs and cats living together...mass hysteria!!');
});

module.exports = router;