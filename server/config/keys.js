// PROD VS DEV KEYS

if (process.env.NODE_ENV === 'production') {    //process.env will be set by Heroku
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}