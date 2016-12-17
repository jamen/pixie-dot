var get = require('object-path').get

function dot(expression, data) {
  if (expression.indexOf('.') > -1) {
    return get(data, expression)
  }
}

module.exports = dot
