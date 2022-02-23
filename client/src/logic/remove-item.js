/**
 * Remove a specific item from an array.
 *
 * @param {string} [item] - The item to remove.
 * @param {Array} [array] - The array which content the item to remove.
 * @returns {Array} - The new array which has removed the item.
 */

export const removeItemFromArray = (item, array) => {
  if (array.length === 0) {
    return [];
  }
  if (!array.includes(item)) {
    return `"${item}" is not included in the array`;
  }
  const index = array.indexOf(item);
  array.splice(index, 1);
  return array;
};
