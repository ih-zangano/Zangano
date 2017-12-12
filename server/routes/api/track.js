const express = require('express');
const trackRoutes = express.Router();
const trackController = require('../../controllers/track-controller');

trackRoutes.get('/new', trackController.getInfoTrack);



module.exports = trackRoutes;
