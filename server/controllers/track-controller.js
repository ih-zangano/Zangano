const express = require('express');
const router = express.Router();
const geartrack = require('geartrack');
const trackerUrls = require('../models/trackers');
const trackernew = require('../models/Track');
const User = require('../models/User');

module.exports = {
  //funcion toma informacion track
  getInfoTrack: (req, res, next) => {
    const idForTrack = req.query.id;
    geartrack.correoses.getInfo(idForTrack, (err, TrakerInfo) => {
          if (err) {
            return;
          }
          const newTrack = new trackernew({
            id: TrakerInfo.id,
            state: TrakerInfo.state,
            states: TrakerInfo.states,
            trackerWebsite: TrakerInfo.trackerWebsite
          });
    trackernew.findOneAndUpdate(
      { id: req.query.id },
      { id: TrakerInfo.id, state: TrakerInfo.state, states: TrakerInfo.states, trackerWebsite: TrakerInfo.trackerWebsite},
      { new:true })
      .then(track => {
        if (track) {
          res.status(200).json(track);
        } else {
          newTrack
            .save()
            .then(result => res.status(200).json(result))
            .catch(e =>
              res
                .status(500)
                .json({ message: 'Error rendering a new track' })
            );
        }
      });

 
    });
  },
  getOne: (req, res, next) => {
    trackernew
      .findById(req.params.id)
      .populate('bag')
      .then(track => res.status(200).json(track))
      .catch(e =>
        res.status(500).json({ message: 'Error rendering a single track' })
      );
  },
  getAll: (req, res, next) => {
    trackernew
      .find()
      .populate('track user')
      .then(bag => res.status(200).json(bag))
      .catch(e =>
        res.status(500).json({ message: 'Error to find all track(bag)' })
      );
  },

  delete: (req, res, next) => {
    trackernew
      .findByIdAndRemove(req.params.id)
      .then(() => res.status(200).json({ message: 'Track removed' }))
      .catch(e =>
        res.status(500).json('Error when you try to delete the track')
      );
  }
};
