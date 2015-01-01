var baseCallback = require('../internal/baseCallback'),
    slice = require('./slice');

/**
 * Creates a slice of `array` excluding elements dropped from the end.
 * Elements are dropped until `predicate` returns falsey. The predicate is
 * bound to `thisArg` and invoked with three arguments; (value, index, array).
 *
 * If a property name is provided for `predicate` the created "_.pluck" style
 * callback returns the property value of the given element.
 *
 * If an object is provided for `predicate` the created "_.where" style callback
 * returns `true` for elements that have the properties of the given object,
 * else `false`.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Array
 * @param {Array} array The array to query.
 * @param {Function|Object|string} [predicate=_.identity] The function invoked
 *  per element.
 * @param {*} [thisArg] The `this` binding of `predicate`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.dropRightWhile([1, 2, 3], function(n) { return n > 1; });
 * // => [1]
 *
 * var users = [
 *   { 'user': 'barney',  'status': 'busy', 'active': false },
 *   { 'user': 'fred',    'status': 'busy', 'active': true },
 *   { 'user': 'pebbles', 'status': 'away', 'active': true }
 * ];
 *
 * // using "_.pluck" callback shorthand
 * _.pluck(_.dropRightWhile(users, 'active'), 'user');
 * // => ['barney']
 *
 * // using "_.where" callback shorthand
 * _.pluck(_.dropRightWhile(users, { 'status': 'away' }), 'user');
 * // => ['barney', 'fred']
 */
function dropRightWhile(array, predicate, thisArg) {
  var length = array ? array.length : 0;

  predicate = baseCallback(predicate, thisArg, 3);
  while (length-- && predicate(array[length], length, array)) {}
  return slice(array, 0, length + 1);
}

module.exports = dropRightWhile;
