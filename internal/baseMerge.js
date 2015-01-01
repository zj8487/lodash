var arrayEach = require('./arrayEach'),
    baseForOwn = require('./baseForOwn'),
    isArray = require('../lang/isArray'),
    isArrayLike = require('./isArrayLike'),
    isPlainObject = require('../lang/isPlainObject');

/**
 * The base implementation of `_.merge` without support for argument juggling,
 * multiple sources, and `this` binding `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {Function} [customizer] The function to customize merging properties.
 * @param {Array} [stackA=[]] Tracks traversed source objects.
 * @param {Array} [stackB=[]] Associates values with source counterparts.
 * @returns {Object} Returns the destination object.
 */
function baseMerge(object, source, customizer, stackA, stackB) {
  var isSrcArr = isArrayLike(source);

  (isSrcArr ? arrayEach : baseForOwn)(source, function(srcValue, key, source) {
    var isArr = isArrayLike(srcValue),
        isObj = isPlainObject(srcValue),
        value = object[key];

    if (!(isArr || isObj)) {
      var result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
          isCommon = typeof result == 'undefined';

      if (isCommon) {
        result = srcValue;
      }
      if ((isSrcArr || typeof result != 'undefined') &&
          (isCommon || (result === result ? result !== value : value === value))) {
        object[key] = result;
      }
      return;
    }
    // Avoid merging previously merged cyclic sources.
    stackA || (stackA = []);
    stackB || (stackB = []);

    var length = stackA.length;
    while (length--) {
      if (stackA[length] == srcValue) {
        object[key] = stackB[length];
        return;
      }
    }
    result = customizer ? customizer(value, srcValue, key, object, source) : undefined;
    isCommon = typeof result == 'undefined';

    if (isCommon) {
      result = isArr
        ? (isArray(value) ? value : [])
        : (isPlainObject(value) ? value : {});
    }
    // Add the source value to the stack of traversed objects and associate
    // it with its merged value.
    stackA.push(srcValue);
    stackB.push(result);

    // Recursively merge objects and arrays (susceptible to call stack limits).
    if (isCommon) {
      object[key] = baseMerge(result, srcValue, customizer, stackA, stackB);
    } else if (result === result ? result !== value : value === value) {
      object[key] = result;
    }
  });
  return object;
}

module.exports = baseMerge;
