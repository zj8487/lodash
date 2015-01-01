/** Used for native method references. */
var arrayProto = Array.prototype;

/** Native method references. */
var push = arrayProto.push;

/**
 * Converts an `arguments` object to a plain `Object` object.
 *
 * @private
 * @param {Object} args The `arguments` object to convert.
 * @returns {Object} Returns the new converted object.
 */
function argsToObject(args) {
  var result = { 'length': 0 };
  push.apply(result, args);
  return result;
}

module.exports = argsToObject;
