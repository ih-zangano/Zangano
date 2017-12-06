const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const trackSchema = new mongoose.Schema({
  id: String,
  state: String,
  destinyId: String,
  states: [{ date: String, state: String, title: String }],
  trackerWebsite: String,
  dateArrive: Date
});
const track = mongoose.model('track', trackSchema);
module.exports = Track;