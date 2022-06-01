const flask = require('./flask')
const theme = require('./theme')
const welove = require('./welove')
const css = require('./css')
const Vue3Admin = require('./VUE3Admin')
const ExperimentalInstruction = require('./ExperimentalInstruction')
module.exports = Object.assign({},
  theme.zh, welove, flask, css.zh, Vue3Admin, ExperimentalInstruction
)
