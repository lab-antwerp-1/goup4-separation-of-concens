/**
 * Convert user input list items to an array of list items.
 * @param {string} [listItems = ""] - A string of list that user are going to input.
 * @returns {array} - An array of list.
 *
 */
export const arrayOfListItems = (listItems = '') => {
  if ((listItems = '')) {
    return [];
  }
  return listItems.split(/[,;]{1} ?/);
};
