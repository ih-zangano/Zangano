const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const trackSchema = new mongoose.Schema({
  id: String,
  state: String,
  states: [{ date: String}, {state: String}, {title: String} ],
  trackerWebsite: String,
});
const track = mongoose.model('track', trackSchema);
module.exports = track;