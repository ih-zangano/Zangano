const findOrCreate = require('mongoose-findorcreate');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost');
const Schema = mongoose.Schema;

const ClickSchema = new Schema({ 
      owner: { type: Schema.Types.ObjectId, ref: 'User' },
  elements: [ 
    {
      track: { type: Schema.Types.ObjectId, ref: 'Track' },
    }]
});

ClickSchema.plugin(findOrCreate);
const Click = mongoose.model('Click', ClickSchema);