const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopController');
const userControllers = require('../controllers/userController');


// This router handles our axios fetch requests to get prices and sends them back to the
// front end.

router.get('/', shopControllers.getShop, async (req, res) => {
  try {
    console.log('trying', res.locals.shops);
    res.json(res.locals.shops);
  } catch (err) {
    // check if we need to send as json?
    console.log('error', err);
    res.sendStatus(400);
  }
});

router.post('/users', userControllers.getUser, async (req, res) => {
  try {
    // console.log('trying to get USER DATA', res.locals.users);
    return res.status(200).json(res.locals.users)
  } catch (err) {
    // check if we need to send as json?
    console.log('error', err);
    res.sendStatus(400);
  }
});


router.post('/createUser', userControllers.createUser, async (req, res) => {
  try {
    
    return res.status(200).send('user data POSTED')

  } catch (err) {
    // check if we need to send as json?
    console.log('error', err);
    res.sendStatus(400);
  }
})

router.delete('/users', userControllers.deleteUser, (req, res) => {
  return res.status(200).send('user data DELETED')
})


module.exports = router;