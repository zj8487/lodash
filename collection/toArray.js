var baseSlice = require('../internal/baseSlice'),
    isLength = require('../internal/isLength'),
    values = require('../object/values');

/**
 * Converts `collection` to an array.
 *
 * @static
 * @memberOf _
 * @category Collection
 * @param {Array|Object|string} collection The collection to convert.
 * @returns {Array} Returns the new converted array.
 * @example
 *
 * (function() { return _.toArray(arguments).slice(1); })(1, 2, 3, 4);
 * // => [2, 3, 4]
 */
function toArray(collection) {
  var length = collection ? collection.length : 0;
  if (!isLength(length)) {
    return values(collection);
  }
  if (!length) {
    return [];
  }
  return baseSlice(collection);
}

module.exports = toArray;
