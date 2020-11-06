const fs = require('fs')
const path = require('path')
const api = require('../server/routes/api')
const userControl = require('../server/controllers/userController.js')
const shopControl = require('../server/controllers/shopController.js')

const MONGO_URI = 'mongodb+srv://Gavin:Fear1894@cluster0.rwxzh.mongodb.net/shopsmarter?retryWrites=true&w=majority'

const mongoose = require('mongoose');
// const User = require('../server/modules/userModel.js')
const { User } = require('../server/modules/userModel')
const fakeUser = {
  userName: 'drunkin', 
  password: 'code'
};

describe ('User Model Test', () => {

  // describe('check for user fetch', => {
  // })
  beforeAll(async () => {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
    });
  });
  it('create & save user', async () => {
    //takes declared user data and save to data base
    const validUser = new User(fakeUser);
    const savedUser = await validUser.save();

    //if saved to database, the id should be defined
      //user and password should be the same 
    expect(savedUser._id).toBeDefined();
    expect(savedUser.name).toBe(fakeUser.name);
    expect(savedUser.password).toBe(fakeUser.password);
  })

});