const express = require('express');
const router = express.Router();
const track = require('./track');


router.use('/', auth);
router.use('/users', user);
router.use('/track', track);


module.exports = router;
