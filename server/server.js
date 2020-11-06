const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const axios = require("axios");
const apiRouter = require("./routes/api.js");
const app = express();


// connects our server to MongoDB
const mongoose = require("mongoose");
const MONGO_URI = 'mongodb+srv://Gavin:Fear1894@cluster0.rwxzh.mongodb.net/shopsmarter?retryWrites=true&w=majority'
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// checks to make sure connection is successfully made
mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!')
}).catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
}

app.use('/api', apiRouter);

// test if server is working
app.get('/', (req, res) => {
  res.send('Stab-rabbits alive on 3000');
});

// global error handler
app.use('/', (req, res) => {
  res.sendStatus(404);
});

// server start
app.listen(3000, () => {
  console.log('Listening on 3000');
});

module.exports = app;













