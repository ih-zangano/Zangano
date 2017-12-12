const express = require('express');
const bagRouter = express.Router();
const bagController = require('../../controllers/bag-controller');

bagRouter.get('/', bagController.getAll);
bagRouter.get('/:id', bagController.getOne);
bagRouter.post('/new', bagController.newTrack);
bagRouter.delete('/:id/delete', bagController.delete);

module.exports = bagRouter;
