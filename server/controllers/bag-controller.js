const bag = require('../models/Bag');
const user = require('../models/User');
const track = require('../models/Track');

module.exports = {
  getAll: (req, res, next) => {
    Track.find({})
      .populate('id')
      .then(tracks => res.status(200).json(track))
      .catch(e =>
        res.status(500).json({ message: 'Error to find all track' })
      );
  },
  getOne: (req, res, next) => {
    Track.findById(req.params.id)
      .populate('id')
      .then(track => res.status(200).json(track))
      .catch(e => res.status(500).json({ message: 'Something went wrong' }));
  },
  newTrack: (req, res, next) => {
    const { id, postalcode } = req.body;
    const newTrack = new Track({ id, postalcode })
      .save()
      .then(track => {
        res.status(200).json({ message: 'Your  New Track was created' });
      })
      .catch(e =>
        res
          .status(500)
          .json({ message: 'Error when try to create new track' })
      );
  },
  delete: (req, res, next) => {
    Track.findByIdAndRemove(req.params.id)
      .then(() => res.status(200).json({ message: 'Track removed' }))
      .catch(e =>
        res.status(500).json('Error when you try to delete the track')
      );
  }
};