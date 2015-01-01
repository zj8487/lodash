/**
 * The base implementation of `_.slice` without support for `start` and `end`
 * arguments.
 *
 * @private
 * @param {Array} array The array to slice.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array) {
  var index = -1,
      length = array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = array[index];
  }
  return result;
}

module.exports = baseSlice;
