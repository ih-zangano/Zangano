const express = require('express');
const router = express.Router();
const track = require('./track');
//const user = require('./user');
//const auth = require('./auth');


//router.use('/', auth);
//router.use('/users', user);
router.use('/track', track);
//router.bag('/bag', bag);


module.exports = router;
