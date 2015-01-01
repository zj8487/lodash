var baseCallback = require('../internal/baseCallback'),
    baseEach = require('../internal/baseEach'),
    baseSortBy = require('../internal/baseSortBy'),
    compareAscending = require('../internal/compareAscending'),
    isIterateeCall = require('../internal/isIterateeCall'),
    isLength = require('../internal/isLength');

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection through `iteratee`. This method performs
 * a stable sort, that is, it preserves the original sort order of equal elements.
 * The `iteratee` is bound to `thisArg` and invoked with three arguments;
 * (value, index|key, collection).
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
 * @param {Array|Function|Object|string} [iteratee=_.identity] The function
 *  invoked per iteration. If a property name or an object is provided it is
 *  used to create a "_.pluck" or "_.where" style callback respectively.
 * @param {*} [thisArg] The `this` binding of `iteratee`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * _.sortBy([1, 2, 3], function(n) { return Math.sin(n); });
 * // => [3, 1, 2]
 *
 * _.sortBy([1, 2, 3], function(n) { return this.sin(n); }, Math);
 * // => [3, 1, 2]
 *
 * var users = [
 *   { 'user': 'fred' },
 *   { 'user': 'pebbles' },
 *   { 'user': 'barney' }
 * ];
 *
 * // using "_.pluck" callback shorthand
 * _.pluck(_.sortBy(users, 'user'), 'user');
 * // => ['barney', 'fred', 'pebbles']
 */
function sortBy(collection, iteratee, thisArg) {
  if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
    iteratee = null;
  }
  iteratee = baseCallback(iteratee, thisArg, 3);

  var index = -1,
      length = collection ? collection.length : 0,
      result = isLength(length) ? Array(length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = { 'criteria': iteratee(value, key, collection), 'index': index, 'value': value };
  });
  return baseSortBy(result, compareAscending);
}

module.exports = sortBy;
