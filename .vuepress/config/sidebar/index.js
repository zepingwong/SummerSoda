const flask = require('./flask')
const theme = require('./theme')
const welove = require('./welove')
const css = require('./css')
module.exports = Object.assign({},
  theme.zh, welove, flask, css.zh
)
