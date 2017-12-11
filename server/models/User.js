const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');
const Schema = mongoose.Schema;


const userSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    bag: { type: Schema.Types.ObjectId, ref: 'Bag' }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

userSchema.plugin(findOrCreate);
const User = mongoose.model('User', userSchema);
module.exports = User;
