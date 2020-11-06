const { Db } = require('mongodb');
const mongoose = require('mongoose');

// Please note our database is set up like this: A table of food names and primary keys.
// Each of these is connected to a foreign key in table for a specific store, which has
// foreign keys connecting to a list of prices and their primary keys. It's a one to many
// to one relationship.That is why anytime you need the price data you have to send
// out three queries and why our query text has a double join. Please see ReadMe
// for suggestions on how to improve this and make database more modular.
const Schema = mongoose.Schema;
//created default ShopSchema for different grocery stores 
const ShopSchema = new Schema({
  shopName: String,
  itemList: Object
})

const Shop = mongoose.model('Shop', ShopSchema);


module.exports = {
  Shop
}
