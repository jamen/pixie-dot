# pixie-dot [![NPM version](https://badge.fury.io/js/pixie-dot.svg)](https://npmjs.org/package/pixie-dot)

> Access template data with dot notation

## Installation

```sh
$ npm install --save pixie-dot
```

## Usage

### `dot(template, data)`

Returns compiled template, with support for dot notation in the expressions

 - `template` **required**: A [`pixie` template object](https://github.com/pixiejs/pixie#structure)
 - `data`: An object/array that you compile with the template


```js
var dot = require('pixie-dot')
var pixie = require('pixie')

var template = pixie('Hello {{input.world}} and {{input.person}}!')

dot(template, {
  input: { world: 'Mars', person: 'Jamen' }
})
// => 'Hello Mars and Jamen!'
```

You can also select arrays with numbers:

```js
var template = pixie('Hello {{inputs.2.world}} and {{world.2.person}}!')
```

## License

MIT © [Sean Wilson](https://imsean.me)
