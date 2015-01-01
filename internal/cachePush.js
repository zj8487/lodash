/**
 * Adds `value` to the cache.
 *
 * @private
 * @name push
 * @memberOf SetCache
 * @param {*} value The value to cache.
 */
function cachePush(value) {
  var data = this.data,
      type = typeof value;

  if (type == 'number') {
    data[type][value] = true;
  } else {
    data.set.add(value);
  }
}

module.exports = cachePush;
