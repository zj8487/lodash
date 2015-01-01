var isIterateeCall = require('../internal/isIterateeCall'),
    slice = require('./slice');

/**
 * Creates a slice of `array` with `n` elements taken from the end.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.takeRight([1, 2, 3], 1);
 * // => [3]
 *
 * _.takeRight([1, 2, 3], 2);
 * // => [2, 3]
 *
 * _.takeRight([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * _.takeRight([1, 2, 3], 0);
 * // => []
 */
function takeRight(array, n, guard) {
  if (guard ? isIterateeCall(array, n, guard) : n == null) {
    n = 1;
  }
  n = array ? (array.length - (+n || 0)) : 0;
  return slice(array, n < 0 ? 0 : n);
}

module.exports = takeRight;
