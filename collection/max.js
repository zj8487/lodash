var arrayMax = require('../internal/arrayMax'),
    createExtremum = require('../internal/createExtremum');

/**
 * Gets the maximum value of `collection`. If `collection` is empty or falsey
 * `-Infinity` is returned. If an iteratee function is provided it is invoked
 * for each value in `collection` to generate the criterion by which the value
 * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
 * arguments; (value, index, collection).
 *
 * If a property name is provided for `iteratee` the created "_.pluck" style
 * callback returns the property value of the given element.
 *
 * If an object is provided for `iteratee` the created "_.where" style callback
 * returns `true` for elements that have the properties of the given object,
 * else `false`.
 *
 * @static
 * @memberOf _
 * @category Collection
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function|Object|string} [iteratee] The function invoked per iteration.
 *  If a property name or object is provided it is used to create a "_.pluck"
 *  or "_.where" style callback respectively.
 * @param {*} [thisArg] The `this` binding of `iteratee`.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * _.max([4, 2, 8, 6]);
 * // => 8
 *
 * _.max([]);
 * // => -Infinity
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 }
 * ];
 *
 * _.max(users, function(chr) { return chr.age; });
 * // => { 'user': 'fred', 'age': 40 };
 *
 * // using "_.pluck" callback shorthand
 * _.max(users, 'age');
 * // => { 'user': 'fred', 'age': 40 };
 */
var max = createExtremum(arrayMax);

module.exports = max;
