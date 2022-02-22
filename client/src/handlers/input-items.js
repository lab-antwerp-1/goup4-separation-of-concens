import { data } from '../../data.js';
import { arrayOfListItems } from '../logic/array-list.js';

/**
 * Entry point for users adding title and item to the list.
 * It is called each time the user clicks the "add" button.
 *
 * @param {Event} event - The event triggered when the user clicks the button.
 */

export const getInputHandler = (event) => {
  /* -- entry point for adding a list -- */
  // debugger;
  /* -- check the target -- */
  if (event.target.type !== 'button') {
    return;
  }

  /* -- gather user input from DOM -- */
  const title = event.target.form.text.value;
  const listItems = event.target.form.items.value;

  /* check input and update data */
  const warnings = document.getElementById('warnings');
  warnings.innerText = '';

  if (title === undefined || title.length === 0) {
    warnings.innerText = "title box can't be empty";
    return;
  } else if (listItems === undefined || listItems.length === 0) {
    warnings.innerText = "list box can't be empty!";
    return;
  }
  data[`${title}`] = arrayOfListItems(listItems);
  // console.log(data); // at this point, programmer can see data changes from console; but user can't unless `3 - list display` finished.
};
