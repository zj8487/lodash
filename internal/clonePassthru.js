var isCloneable = require('./isCloneable');

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

module.exports = clonePassthru;
