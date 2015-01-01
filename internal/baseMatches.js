var baseClone = require('./baseClone'),
    baseIsMatch = require('./baseIsMatch'),
    clonePassthru = require('./clonePassthru'),
    isStrictComparable = require('./isStrictComparable'),
    keys = require('../object/keys');

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.matches` which supports specifying whether
 * `source` is cloned.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @param {boolean} [isCloned] Specify cloning the source object.
 * @returns {Function} Returns the new function.
 */
function baseMatches(source, isCloned) {
  var props = keys(source),
      length = props.length;

  if (length == 1) {
    var key = props[0],
        value = source[key];

    if (isStrictComparable(value)) {
      return function(object) {
        return object != null && value === object[key] && hasOwnProperty.call(object, key);
      };
    }
  }
  var notCloned = !isCloned,
      values = Array(length),
      strictCompareFlags = Array(length);

  while (length--) {
    value = source[props[length]];
    var isStrict = isStrictComparable(value);

    values[length] = (isStrict || notCloned) ? value : baseClone(value, true, clonePassthru);
    strictCompareFlags[length] = isStrict;
  }
  return function(object) {
    return baseIsMatch(object, props, values, strictCompareFlags);
  };
}

module.exports = baseMatches;
