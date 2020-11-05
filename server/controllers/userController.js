const { findDOMNode } = require('react-dom');
const { User } = require('../modules/userModel');
const mongoose = require('mongoose');

const userControllers = {};

userControllers.getUser = async (req,res,next) => {
    try {
        // await User.post(() =>{
            
        // })
        // userName: 'testingName',
        //   password: 'testpwd',
        //   shoppingCart: []

        await User.find({
          
        })
        
        .then((data) => {
        //   console.log(data);
          const result = data;
          res.locals.users = result;
        });
    
        return next();
      } 
      catch (err) {
        return next({ err });
      }
}

userControllers.createUser = async (req,res,next) => {
    try {
        console.log(req.query)
        const newUser = new User({
            userName: req.query.userName,
            password: req.query.password,
            shoppingCart: req.query.shoppingCart
        })

        await newUser.save((error) => {

        })
        
        .then((data) => {
        //   console.log(data);
          const result = data.query;
          res.locals.users = result;
        });
    
        return next();
      } 
      catch (err) {
        return next({ err });
      }
}






module.exports = userControllers;