const express = require('express');
const router = express.Router();
const geartrack = require('geartrack');
const trackerUrls = require('../models/trackers');
const trackernew = require('../models/Track');





  let id = '';
  let postalcode = '';

  trackerUrls.forEach(url => {
    geartrack[url].getInfo(id, (err, TrakerInfo) => {
      if (err) {
        return;
      }
      console.log(TrakerInfo);
    });
  });
//   geartrack.adicional.getInfo(id, postalcode, (err, TrakerInfo) => {
//     if (err) {
//       return;
//     }
//     console.log(TrakerInfo.status);
//   });
// };

module.exports = {trackerUrls};
