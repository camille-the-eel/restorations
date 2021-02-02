// IMPORTS
const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const devKeys = require('./server/config/dev');

// require in all models
// MUST call models before they are used– this creates the model. can't use it if it doesn't exist yet
// require('./server/models/Quote');
// require('./server/models/Contact');

// CONNECT TO MONGO ATLAS via private key
// mongoose.connect(devKeys.mongoURI);

// APP DECLARATION
const app = express();

// MIDDLEWARE : small functions that an be used to modify incoming requests to our app before they are sent off to route handlers
// app.use(bodyParser.json()); 

app.get('/', (req, res) => {
  res.send({ hi: 'there'});
})


// PORT LISTENER
const PORT = process.env.PORT || 5000;
app.listen(PORT);