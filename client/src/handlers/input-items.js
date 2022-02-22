import { data } from '../../data.js';
import { arrayOfListItems } from '../logic/array-list.js';


/**
 * Entry point for users adding title and item to the list.
 * It is called each time the user clicks the "add" button.
 *
 * @param {Event} event - The event triggered when the user clicks the button.
 */

export const getInputHandler = (event) => {
/* -- entry point for adding or removing a word -- */
// debugger;
/* -- check the target -- */
if (event.target.type !== 'button') {
    return;
  }
    
/* -- gather user input from DOM -- */
const title = event.target.form.text.value; 
const listItems = event.target.form.list-item.value;
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
console.log(data);
/* -- use the input and data to implement the user story --

a user can add a new item to the list
      given the input contains non-letters,
        it will not be added
        a warning is displayed
      given the input contains letters or numbers
        it will be added to the task list
        the list will be re-rendered
    a user can remove item from the list
      given the input is not in the list
        a warning is posted
      given the input is in the list
        it is removed
        the list is re-rendered
  */
/* -- render new words -- */ 
};