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
        //check if user already exist in the data base 
          //if it does, send client (user already created)

        console.log(req.query)
        console.log(req.params)
        console.log(req.body)
        const newUser = new User({
            userName: req.query.userName,
            password: req.query.password,
            shoppingCart: req.query.shoppingCart
        })


        await newUser.save((error) => {
          if (error) {
              console.log('username invalid, please try another')
              return next(error);
          } else {
              console.log('user has been saved');
              return next();
          }
        })
        
        // .then((data) => {
        // //   console.log(data);
        //   const result = data.query;
        //   res.locals.users = result;
        // });
    
      } 
      catch (err) {
        // res.sendError('Username in use, please try a different username.')
        return next({ err });
      }
}

userControllers.deleteUser = async (req,res,next) => {
  try {
      //check if there's anything to delete?
        //if no user, return user data not found. 
          //Could add delete user after getUser or create Verify user
    console.log(req.query)
    await User.deleteOne({
      userName: req.query.userName
    })
    
    .then((data) => {
      console.log(data);
      const result = data;
      res.locals.users = result;
    });

    return next();
        
    } 
    catch (err) {
      return next({ err });
    }
}







module.exports = userControllers;