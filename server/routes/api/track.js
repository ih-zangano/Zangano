const express = require('express');
const trackAllUrls = express.Router();
const trackController = require('../../controllers/track-controller');

trackAllUrls.get('/', trackController.getAll);



module.exports = trackAllUrls;
