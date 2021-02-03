// IMPORTS
const express = require('express');
const path = require("path");
// const mongoose = require('mongoose');
const devKeys = require('./server/config/dev');

// require in all models
// MUST call models before they are used– this creates the model. can't use it if it doesn't exist yet
// require('./server/models/Quote');
// require('./server/models/Contact');

// CONNECT TO MONGO ATLAS via private key
// mongoose.connect(devKeys.mongoURI);

// APP DECLARATION
const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SERVE STATIC ASSETS FOR PROD (to Heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// ROUTES
app.get('/', (req, res) => {
  res.send({ hi: 'there'});
})

// SEND ALL OTHER REQUESTS TO CLIENT SIDE
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// PORT LISTENER
const PORT = process.env.PORT || 5000;
app.listen(PORT);