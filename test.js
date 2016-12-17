var test = require('tape')
var spec = require('tap-spec')
var render = require('pixie').render
var dot = require('./index')

var template = '{{foo.bar}} bar'

test('property access', function(t) {
  t.plan(1)

  var data = { foo: { bar: 'foo' } }
  var rendered = render(template, data, { engines: [dot] })

  t.equal(rendered, 'foo bar')
})

test('undefined property access', function(t) {
  t.plan(1)

  var data = { foo: { baz: 'foo' } }
  var rendered = render(template, data, { engines: [dot] })

  t.equal(rendered, 'undefined bar')
})

test.createStream()
  .pipe(spec())
  .pipe(process.stdout)
