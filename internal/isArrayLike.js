var isLength = require('./isLength'),
    isObjectLike = require('./isObjectLike');

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

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the `toStringTag` of values.
 * See the [ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
 * for more details.
 */
var objToString = objectProto.toString;

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

module.exports = isArrayLike;
