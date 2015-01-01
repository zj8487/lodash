var createCompounder = require('../internal/createCompounder');

/**
 * Converts `string` to snake case.
 * See [Wikipedia](http://en.wikipedia.org/wiki/Snake_case) for more details.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to snake case.
 * @returns {string} Returns the snake cased string.
 * @example
 *
 * _.snakeCase('Hello world');
 * // => 'hello_world'
 *
 * _.snakeCase('--hello-world');
 * // => 'hello_world'
 *
 * _.snakeCase('helloWorld');
 * // => 'hello_world'
 */
var snakeCase = createCompounder(function(result, word, index) {
  return result + (index ? '_' : '') + word.toLowerCase();
});

module.exports = snakeCase;
