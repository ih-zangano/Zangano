const express = require('express');
const router = express.Router();
const geartrack = require('geartrack');
const trackerUrls = require('../models/trackers');
const trackernew = require('../models/Track');


module.exports = { 
  getAll: (req, res, next) => {
  geartrack.correoses.getInfo("PQ599A0438062660128260L", (err, TrakerInfo) => {
	  if(err) { return }
    
   res.json(TrakerInfo);
   
  })

  }
}
