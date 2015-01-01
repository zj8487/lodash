/**
 * Checks if `value` is in `cache` mimicking the return signature of
 * `_.indexOf` by returning `0` if the value is found, else `-1`.
 *
 * @private
 * @param {Object} cache The cache to search.
 * @param {*} value The value to search for.
 * @returns {number} Returns `0` if `value` is found, else `-1`.
 */
function cacheIndexOf(cache, value) {
  var type = typeof value,
      data = cache.data,
      result = type == 'number' ? data[type][value] : data.set.has(value);

  return result ? 0 : -1;
}

module.exports = cacheIndexOf;
