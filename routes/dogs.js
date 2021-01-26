'use strict';

const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.send('Woof!');
});

module.exports = router;