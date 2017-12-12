const express = require('express');
const router = express.Router();
const geartrack = require('geartrack');
const trackerUrls = require('../models/trackers');
const trackernew = require('../models/Track');


module.exports = {
  //funcion toma informacion track
  getInfoTrack: (req, res, next) => {
    const id = "PQ599A0438062660128260L" //req.query.id;
    geartrack.correoses.getInfo(id,
      (err, TrakerInfo) => {
        if (err) {
          return;
        }
        //console.log(req)
          const newTrack = new trackernew({
          id: TrakerInfo.id,
          state: TrakerInfo.state,
          states: TrakerInfo.states,
          trackerWebsite: TrakerInfo.trackerWebsite
        });
        newTrack.save()
        .then(result => res.json(result))
        .catch(err => console.log(err))
      });
  },

  // getAll: (req, res, next) => {
  //   Track.find({}).populate('user')
  //     .populate('id')
  //     .then(tracks => res.status(200).json(track))
  //     .catch(e => res.status(500).json({ message: 'Error to find all track' }));
  // },
  // getOne: (req, res, next) => {
  //   Track.findById(req.params.id)
  //     .populate('id')
  //     .then(track => res.status(200).json(track))
  //     .catch(e => res.status(500).json({ message: 'Something went wrong' }));
  // },
  // delete: (req, res, next) => {
  //   Track.findByIdAndRemove(req.params.id)
  //     .then(() => res.status(200).json({ message: 'Track removed' }))
  //     .catch(e =>
  //       res.status(500).json('Error when you try to delete the track')
  //     );
  // }
};

