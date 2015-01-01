/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Array} Returns the initialized array clone.
 */
function initArrayClone(array, isDeep) {
  var index = -1,
      length = array.length,
      result = new array.constructor(length);

  if (!isDeep) {
    while (++index < length) {
      result[index] = array[index];
    }
  }
  // Add array properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initArrayClone;
