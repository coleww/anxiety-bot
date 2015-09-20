var pick = require('pick-random')

var anxieties = [
  "",
  "",
  ""
]

module.exports = function () {
  // don't point this at people who aren't you.
  // they're just gonna block you anyways, so just don't bother trolling.
  // there are better things to do.
  return '@yrTwitterName ' + pick(anxieties)
}
