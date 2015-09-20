var anxietyBot = require('./')
var config = require('./config')
var Twit = require('twit')
var T = new Twit(config)

var toot = anxietyBot()

// tweet approx. once a day if on a `* * * * *` crontab
// because anxiety can strike at any moment of the day
if (Math.random() < 0.0006944444444444445) {
  T.post('statuses/update', {status: toot}, function (err, data, response) {
    console.log(err)
    console.log(data)
  })
}