var toString = require('../internal/toString');

/**
 * Capitalizes the first character of `string`.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('fred');
 * // => 'Fred'
 */
function capitalize(string) {
  string = toString(string);
  return string ? (string.charAt(0).toUpperCase() + string.slice(1)) : string;
}

module.exports = capitalize;
