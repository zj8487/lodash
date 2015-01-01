var createCompounder = require('../internal/createCompounder');

/**
 * Converts `string` to kebab case (a.k.a. spinal case).
 * See [Wikipedia](http://en.wikipedia.org/wiki/Letter_case#Computers) for
 * more details.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to kebab case.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * _.kebabCase('Hello world');
 * // => 'hello-world'
 *
 * _.kebabCase('helloWorld');
 * // => 'hello-world'
 *
 * _.kebabCase('__hello_world__');
 * // => 'hello-world'
 */
var kebabCase = createCompounder(function(result, word, index) {
  return result + (index ? '-' : '') + word.toLowerCase();
});

module.exports = kebabCase;
