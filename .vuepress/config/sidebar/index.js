const flask = require('./flask')
const theme = require('./theme')
const welove = require('./welove')
module.exports = Object.assign({},
  theme.zh, welove, flask
)
