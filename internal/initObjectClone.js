var baseAssign = require('./baseAssign'),
    bufferClone = require('./bufferClone'),
    isCloneable = require('./isCloneable');

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    stringTag = '[object String]';

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

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the `toStringTag` of values.
 * See the [ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
 * for more details.
 */
var objToString = objectProto.toString;

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {null|Object} Returns the initialized object clone if an object
 *  is cloneable, else `null`.
 */
function initObjectClone(object, isDeep) {
  if (!isCloneable(object)) {
    return null;
  }
  var Ctor = object.constructor,
      tag = objToString.call(object),
      isArgs = tag == argsTag,
      isObj = tag == objectTag;

  if (isObj && !(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
    Ctor = Object;
  }
  if (isArgs || isObj) {
    var result = isDeep ? new Ctor : baseAssign(new Ctor, object);
    if (isArgs) {
      result.length = object.length;
    }
    return result;
  }
  switch (tag) {
    case arrayBufferTag:
      return bufferClone(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      var buffer = object.buffer;
      return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      result = new Ctor(object.source, reFlags.exec(object));
      result.lastIndex = object.lastIndex;
  }
  return result;
}

module.exports = initObjectClone;
