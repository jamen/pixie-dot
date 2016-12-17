# pixie-dot [![NPM version](https://badge.fury.io/js/pixie-dot.svg)](https://npmjs.org/package/pixie-dot)

> Access template data with dot notation

## Installation

```sh
$ npm install --save pixie-dot
```

## Usage

```js
var dot = require('pixie-dot')
var pixie = require('pixie')

pixie.render('{{foo.bar}} bar', { foo: { bar: 'foo' } }, { engines: [dot] }) // foo bar
```

It also works with deeply nested objects
```js
var data = {
  a: {
    b: {
      c: {
        d: {
          e: {
            f: 'g'
          }
        }
      }
    }
  }
}

pixie.render('{{a.b.c.d.e.f}}', data, { engines: [dot] }) // g
```

## License

MIT © [Sean Wilson](https://imsean.me)
