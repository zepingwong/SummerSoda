const flask = require('./modules/flask')
const theme = require('./modules/theme')
const welove = require('./modules/welove')
const css = require('./modules/css')

module.exports = Object.assign({},
  theme.zh, welove, flask, css.zh
)
