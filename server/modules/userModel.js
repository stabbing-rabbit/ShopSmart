const { Db } = require('mongodb');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//created default UserSchema for different users
const UserSchema = new Schema({
  userName: {
      type: String,
      unique: true
  },
  password: String,
  shoppingCart: Array
})

const User = mongoose.model('User', UserSchema);

module.exports = {User}
