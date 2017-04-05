var test = require('tape')
var pixie = require('pixie')
var dot = require('./')

test('pixie-dot', function(t) {
  t.plan(2)

  var tmpl1 = pixie('foo {{hello.world}} bar')
  var data1 = { hello: { world: 'earth' } }
  t.is(dot(tmpl1, data1), 'foo earth bar', 'simple dots')

  var tmpl2 = pixie('qux {{foo.baz.2.meme}} baz')
  var data2 = {
    foo: {
      bar: 'foo',
      baz: [ 0, 1, { meme: 'kek' } ]
    }
  }
  t.is(dot(tmpl2, data2), 'qux kek baz', 'dots with array')
})
