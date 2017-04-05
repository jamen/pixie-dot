var get = require('object-path').get

function dot ([fragments, expressions], data) {
  // Compile fragments & expressions
  var source = ''
  for (var i = 0, max = expressions.length; i < max; i++) {
    source += fragments[i] + (get(data, expressions[i]) || '')
  }

  // Return source + last fragment
  return source + fragments[i]
}

module.exports = dot
