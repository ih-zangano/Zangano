const express = require('express');
const trackRoutes = express.Router();
const trackController = require('../../controllers/track-controller');

trackRoutes.get('/new', trackController.getInfoTrack);
trackRoutes.get('/all', trackController.getAll);
trackRoutes.delete('/:id/delete', trackController.delete);


module.exports = trackRoutes;
