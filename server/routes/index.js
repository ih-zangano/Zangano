const express = require('express');
const router = express.Router();
const apiRoutes = require('./api/index');

router.use('/', apiRoutes);

module.exports = router;