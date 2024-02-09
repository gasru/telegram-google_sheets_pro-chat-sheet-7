/* exported  DECART */

/**
 * full join of the inputed ranges.
 *
 * @param {A13:A17;B13:B14;C13:C15;D13:D16} input The ranges to join.
 * @return All variants of ranges combinations
 * @customfunction
 */
function DECART(...args) {
  return decart_(...args);
}

function decart_(...arrays) {
  if (Array.isArray(arrays[0][1]) && Array.isArray(arrays[0][1][0])) {
    arrays = arrays.flat();
  }
  const array1 = arrays.shift().filter((v) => v != '');
  const array2 = arrays[0];
  if (array2 == undefined) {
    return array1[0];
  }
  const result = [];
  let count = 0;
  for (const arg1 of array1) {
    for (const arg2 of array2.filter((v) => v != '')) {
      result[count] = arg1.concat(arg2);
      count++;
    }
  }
  arrays[0] = result;
  return decart_(arrays);
}
