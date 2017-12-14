const express = require('express');
const router = express.Router();
const geartrack = require('geartrack');
const trackerUrls = require('../models/trackers');
const Track = require('../models/Track');
const User = require('../models/User');
const Bag = require('../models/Bag');
const findOrCreate = require('mongoose-findorcreate');
const mongoose = require('mongoose');

module.exports = {
  //funcion toma informacion track
  getInfoTrack: (req, res, next) => {
    const idForTrack = req.query.id;
    geartrack.correoses.getInfo(idForTrack, (err, TrakerInfo) => {
      if (err) {
        return;
      }
      const newTrack = new Track({
        id: TrakerInfo.id,
        state: TrakerInfo.state,
        states: TrakerInfo.states,
        trackerWebsite: TrakerInfo.trackerWebsite
      });
      Track
        .findOneAndUpdate(
          { id: req.query.id },
          {
            id: TrakerInfo.id,
            state: TrakerInfo.state,
            states: TrakerInfo.states,
            trackerWebsite: TrakerInfo.trackerWebsite
          },
          { new: true }
        )
        .then(track => {
          if (track) {
            User.findOneAndUpdate(
              { _id: req.query.userId },
              { $push: { bag: track._id } },
              { new: true }
            ).then(user => res.status(200).json(track));
          } else {
            newTrack.save().then(trackSaved => {
              User.findOneAndUpdate(
                { _id: req.query.userId },
                { $push: { bag: trackSaved._id } },
                { new: true }
              ).then(user => res.status(200).json(trackSaved));
            });
          }
        })
        .catch(e =>
          res.status(500).json({ message: 'Error rendering a new track' })
        );
    });
  },
  getOne: (req, res, next) => {
    Track
      .findById(req.params.id)
      .populate('bag')
      .then(track => res.status(200).json(track))
      .catch(e =>
        res.status(500).json({ message: 'Error rendering a single track' })
      );
  },
  getAll: (req, res, next) => {
    User.findOne({"_id":req.query.userId}).populate("bag")
      .then(users => {
        console.log(users)
      res.status(200).json(users)
    })
      .catch(e =>
        res.status(500).json({ message: 'Error to find all track(bag)' })
      );
  },

  delete: (req, res, next) => {
    Track
      .findByIdAndRemove(req.params.id)
      .then(() => res.status(200).json({ message: 'Track removed' }))
      .catch(e =>
        res.status(500).json('Error when you try to delete the track')
      );
  }
};
