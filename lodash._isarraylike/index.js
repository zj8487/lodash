/**
 * Lo-Dash 3.0.0-pre (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify object classifications that are treated like arrays. */
var arrayLikeTags = {};
arrayLikeTags[argsTag] =
arrayLikeTags[arrayTag] = arrayLikeTags[float32Tag] =
arrayLikeTags[float64Tag] = arrayLikeTags[int8Tag] =
arrayLikeTags[int16Tag] = arrayLikeTags[int32Tag] =
arrayLikeTags[uint8Tag] = arrayLikeTags[uint8ClampedTag] =
arrayLikeTags[uint16Tag] = arrayLikeTags[uint32Tag] = true;
arrayLikeTags[arrayBufferTag] = arrayLikeTags[boolTag] =
arrayLikeTags[dateTag] = arrayLikeTags[errorTag] =
arrayLikeTags[funcTag] = arrayLikeTags[mapTag] =
arrayLikeTags[numberTag] = arrayLikeTags[objectTag] =
arrayLikeTags[regexpTag] = arrayLikeTags[setTag] =
arrayLikeTags[stringTag] = arrayLikeTags[weakMapTag] = false;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return (value && typeof value == 'object') || false;
}

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the `toStringTag` of values.
 * See the [ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
 * for more details.
 */
var objToString = objectProto.toString;

/**
 * Used as the maximum length of an array-like value.
 * See the [ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
 * for more details.
 */
var MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;

/**
 * Checks if `value` is an array-like object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
 */
function isArrayLike(value) {
  return (isObjectLike(value) && isLength(value.length) &&
    (arrayLikeTags[objToString.call(value)])) || false;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isArrayLike;
