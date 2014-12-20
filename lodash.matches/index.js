/**
 * Lo-Dash 3.0.0-pre (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseMatches = require('lodash._basematches');

/**
 * Creates a "_.where" style predicate function which performs a deep comparison
 * between a given object and `source`, returning `true` if the given object
 * has equivalent property values, else `false`.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * var matchesAge = _.matches({ 'age': 36 });
 *
 * _.filter(users, matchesAge);
 * // => [{ 'user': 'barney', 'age': 36 }]
 *
 * _.find(users, matchesAge);
 * // => { 'user': 'barney', 'age': 36 }
 */
function matches(source) {
  return baseMatches(source, true);
}

module.exports = matches;
