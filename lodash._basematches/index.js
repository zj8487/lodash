/**
 * Lo-Dash 3.0.0-pre (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseClone = require('lodash._baseclone'),
    baseIsMatch = require('lodash._baseismatch'),
    isCloneable = require('lodash._iscloneable'),
    keys = require('lodash.keys');

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

/**
 * Used by `_.matches` to clone `source` values, letting uncloneable values
 * passthu instead of returning empty objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 */
function clonePassthru(value) {
  return isCloneable(value) ? undefined : value;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && (value === 0 ? ((1 / value) > 0) : !isObject(value));
}

/**
 * Checks if `value` is the language type of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * **Note:** See the [ES5 spec](http://es5.github.io/#x8) for more details.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291.
  var type = typeof value;
  return type == 'function' || (value && type == 'object') || false;
}

module.exports = baseMatches;
