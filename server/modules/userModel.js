const { Db } = require('mongodb');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//created default ShopSchema for different markets 
const UserSchema = new Schema({
  userName: String,
  password: String,
  shoppingCart: Array
})

const User = mongoose.model('User', UserSchema);

module.exports = {
    User
}