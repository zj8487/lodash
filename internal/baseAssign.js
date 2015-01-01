var keys = require('../object/keys');

/**
 * The base implementation of `_.assign` without support for argument juggling,
 * multiple sources, and `this` binding `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {Function} [customizer] The function to customize assigning values.
 * @returns {Object} Returns the destination object.
 */
function baseAssign(object, source, customizer) {
  var index = -1,
      props = keys(source),
      length = props.length;

  while (++index < length) {
    var key = props[index];
    if (customizer) {
      var value = object[key],
          result = customizer(value, source[key], key, object, source);

      if ((result === result ? result !== value : value === value) ||
          (typeof value == 'undefined' && !(key in object))) {
        object[key] = result;
      }
    } else {
      object[key] = source[key];
    }
  }
  return object;
}

module.exports = baseAssign;
