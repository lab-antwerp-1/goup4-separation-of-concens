/**
 * Sorts an array of strings in different ways.
 * It does not modify the argument (no side-effects).
 *
 * @param {string[]} [toSort=[]] - The array of strings to sort.
 * @param {string} [sortType='new'] - How to sort the strings, 6 options.
 * - old: from oldest to newest.
 * - new: from newest to oldest.
 * - short: from shortest to longest.
 * - long: from longest to shortest.
 * - a: alphabetical order.
 * - z: reverse alphabetical order.
 * If the sortType is not one of these 6 options, a copy of toSort is returned.
 * @returns {string[]} A new sorted array containing the same strings as toSort.
 * @example
 *
 * // [Monday, Tuesday, Wednesday, Thursday], 'short' --> [Monday, Tuesday, Thursday, Wednesday]
 * @example
 *
 * // [Monday, Tuesday, Wednesday, Thursday], 'z' --> [Wednesday, Tuesday, Thursday, Monday]
 */

export const tableSorter = (toSort = [], sortType = '') => {
  const tempArray = [...toSort];

  const sortLength = (par1, par2) => {
    return par1.length - par2.length;
  };

  const sortCase = (par1, par2) => {
    return par1.localeCompare(par2);
  };

  if (sortType === 'old') {
    return tempArray.reverse();
  }
  if (sortType === 'a') {
    return tempArray.sort(sortCase);
  }
  if (sortType === 'z') {
    return tempArray.sort(sortCase).reverse();
  }
  if (sortType === 'short') {
    return tempArray.sort(sortLength);
  }
  if (sortType === 'long') {
    return tempArray.sort(sortLength).reverse();
  }
  return tempArray;
};
