const express = require('express');
const router = express.Router();
const geartrack = require('geartrack');
const trackerUrls = require('../models/trackers');
router.get('/', (req, res, next) => {
  var id = 'PQ4F6P0711773490128260R';
  //let id = req.query.id,postalcode = req.query.postalcode;

  trackerUrls.forEach(url => {
    geartrack[url].getInfo(id, (err, TrakerInfo) => {
      if (err) {
        return;
      }
      console.log(TrakerInfo);
    });  
  });
  geartrack['correoses'].getInfo(id, (err, TrakerInfo) => {
    if (err) {
      return;
    }
    console.log(TrakerInfo);
  });
  geartrack.adicional.getInfo(id, postalcode, (err, TrakerInfo) => {
      if(err) { return  }
      console.log(TrakerInfo.status)
  });
});

module.exports = router;
