var assign = require('./assign'),
    assignDefaults = require('../internal/assignDefaults'),
    baseSlice = require('../internal/baseSlice');

/**
 * Assigns own enumerable properties of source object(s) to the destination
 * object for all destination properties that resolve to `undefined`. Once a
 * property is set, additional defaults of the same property are ignored.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns the destination object.
 * @example
 *
 * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred', 'status': 'busy' });
 * // => { 'user': 'barney', 'age': 36, 'status': 'busy' }
 */
function defaults(object) {
  if (object == null) {
    return object;
  }
  var args = baseSlice(arguments);
  args.push(assignDefaults);
  return assign.apply(undefined, args);
}

module.exports = defaults;
