const { findDOMNode } = require('react-dom');
const { Shop } = require('../modules/shopModel');
const mongoose = require('mongoose');

const shopControllers = {};

// This will pull the price from database when user types in food

shopControllers.getShop = async (req, res, next) => {

  // Because we want to access all of the information from our stores in one query, our query is just an empty obj
  const query = {}; //query is passed to the find method to search for all markets on the DB.

  try {
    await Shop.find(query).then((data) => {
      // console.log(data);
      const result = data;
      res.locals.shops = result;
    });

    return next();
  } 
  catch (err) {
    return next({ err });
  }
//   db.find({})
//     .then((data) => {
//       console.log(data[0]);
//       const result = data;
//       res.locals.price = result;
//     })
//     .catch((err) => {if (err) console.log(err)})

//     console.log(response);
//     return next();
  
// };

}

module.exports = shopControllers;