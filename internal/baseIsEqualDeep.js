var argsToObject = require('./argsToObject'),
    equalArrays = require('./equalArrays'),
    equalByTag = require('./equalByTag'),
    equalObjects = require('./equalObjects'),
    isArray = require('../lang/isArray');

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

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the `toStringTag` of values.
 * See the [ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
 * for more details.
 */
var objToString = objectProto.toString;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * a deep comparison between objects and tracks traversed objects enabling
 * objects with circular references to be compared.
 *
 * @private
 * @param {Array} object The object to compare to `other`.
 * @param {Array} other The object to compare to `value`.
 * @param {Function} equalFunc The function to determine equivalents of arbitrary values.
 * @param {Function} [customizer] The function to customize comparing objects.
 * @param {boolean} [isWhere] Specify performing partial comparisons.
 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, isWhere, stackA, stackB) {
  var objTag = isArray(object) ? arrayTag : objToString.call(object),
      objIsArg = objTag == argsTag,
      objIsArr = !objIsArg && arrayLikeTags[objTag],
      othTag = isArray(other) ? arrayTag : objToString.call(other),
      othIsArg = othTag == argsTag,
      othIsArr = !othIsArg && arrayLikeTags[othTag];

  if (objIsArg) {
    object = argsToObject(object);
    objTag = objectTag;
  }
  if (othIsArg) {
    other = argsToObject(other);
    othTag = objectTag;
  }
  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && !(objIsArr || objIsObj)) {
    return equalByTag(object, other, objTag);
  }
  var valWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
      othWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

  if (valWrapped || othWrapped) {
    return equalFunc(valWrapped ? object.value() : object, othWrapped ? other.value() : other, customizer, isWhere, stackA, stackB);
  }
  if (!isSameTag) {
    return false;
  }
  // Assume cyclic structures are equal.
  // The algorithm for detecting cyclic structures is adapted from ES 5.1
  // section 15.12.3, abstract operation `JO` (http://es5.github.io/#x15.12.3).
  stackA || (stackA = []);
  stackB || (stackB = []);

  var length = stackA.length;
  while (length--) {
    if (stackA[length] == object) {
      return stackB[length] == other;
    }
  }
  // Add `object` and `other` to the stack of traversed objects.
  stackA.push(object);
  stackB.push(other);

  // Recursively compare objects and arrays (susceptible to call stack limits).
  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isWhere, stackA, stackB);

  stackA.pop();
  stackB.pop();

  return result;
}

module.exports = baseIsEqualDeep;
