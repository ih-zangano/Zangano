const express = require('express');
const router = express.Router();
const geartrack = require('geartrack');
// const trackerUrls = require('../models/trackers');
// router.get('/', (req, res, next) => {
//   var id = 'RN434366298CN';

//   trackerUrls.forEach(url => {
//     geartrack[url].getInfo(id, (err, TrakerInfo) => {
//       if (err) {
//         return;
//       }
//       console.log(TrakerInfo);
//     });
//   });
//   geartrack.adicional.getInfo(id, postalcode, (err, TrakerInfo) => {
//       if(err) { return  }
//       console.log(TrakerInfo.status)
//   });
// });

module.exports = router;
