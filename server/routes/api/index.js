const express = require('express');
const router = express.Router();
const track = require('./track');
const user = require('./user');
const auth = require('./auth');
const bag = require ('./bag');


router.use('/auth', auth);
router.use('/users', user);
router.use('/track', track);
router.use('/bag', bag);


module.exports = router;
