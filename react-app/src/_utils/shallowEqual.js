/*eslint-disable no-self-compare */

/**
 * Object.is() polyfill for Internet Explorer, from:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#polyfill
 */
if (!Object.is) {
  Object.defineProperty(Object, "is", {
    value: function (x, y) {
      // SameValue algorithm
      if (x === y) {
        // Return true if x and y are not 0, OR
        // if x and y are both 0 of the same sign.
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Return true if both x AND y evaluate to NaN.
        // The only possibility for a variable to not be strictly equal to itself
        // is when that variable evaluates to NaN (example: Number.NaN, 0/0, NaN).
        return x !== x && y !== y;
      }
    },
  });
}

/**
 * Compare two objects for shallow equivalence. Primitive types are compared for
 * equivalance, objects are only compared by reference (not deepEqual).
 * Edge cases from Facebook shallowEqual:
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/shallowEqual.js
 * @param {object} obj1
 * @param {object} obj2
 */
function shallowEqual(obj1, obj2) {
  // Return true early if native Object.is() passes
  if (Object.is(obj1, obj2)) {
    return true;
  }

  // Check for non-object types
  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check for length of object key arrays
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check for value of each key in object
  for (let i = 0; i < keys1.length; i++) {
    if (
      !hasOwnProperty.call(obj2, keys1[i]) ||
      !Object.is(obj1[keys1[i]], obj2[keys1[i]])
    ) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;
