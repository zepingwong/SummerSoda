const flask = require('./modules/flask')
const theme = require('./modules/theme')
const welove = require('./modules/welove')
const css = require('./modules/css')
const mysql = require('./modules/mysql')

module.exports = Object.assign({},
  theme.zh, welove, flask, css.zh, mysql
)
