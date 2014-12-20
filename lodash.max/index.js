/**
 * Lo-Dash 3.0.0-pre (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var arrayMax = require('lodash._arraymax'),
    createExtremum = require('lodash._createextremum');

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
