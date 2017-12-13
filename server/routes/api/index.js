const express = require('express');
const router = express.Router();
const track = require('./track');
const user = require('./user');
const auth = require('./auth');
const email = require ('./email');


router.use('/auth', auth);
router.use('/users', user);
router.use('/track', track);
router.use('/email', email);


module.exports = router;
