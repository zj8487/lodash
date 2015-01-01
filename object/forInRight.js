var baseForRight = require('../internal/baseForRight'),
    bindCallback = require('../internal/bindCallback'),
    keysIn = require('./keysIn');

/**
 * This method is like `_.forIn` except that it iterates over properties of
 * `object` in the opposite order.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [thisArg] The `this` binding of `iteratee`.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function Shape() {
 *   this.x = 0;
 *   this.y = 0;
 * }
 *
 * Shape.prototype.z = 0;
 *
 * _.forInRight(new Shape, function(value, key) {
 *   console.log(key);
 * });
 * // => logs 'z', 'y', and 'x' assuming `_.forIn ` logs 'x', 'y', and 'z'
 */
function forInRight(object, iteratee, thisArg) {
  iteratee = bindCallback(iteratee, thisArg, 3);
  return baseForRight(object, iteratee, keysIn);
}

module.exports = forInRight;
