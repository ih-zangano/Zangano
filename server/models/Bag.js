const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bagSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  elements: [ 
    {
      track: { type: Schema.Types.ObjectId, ref: 'Track' },
      order: { type: String } }
  ]
});

const Bag = mongoose.model('Bag', bagSchema);
module.exports = Bag;
