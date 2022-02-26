import { data } from '../../data.js';
import { renderTable } from '../components/render-table.js';

/**
 * Entry point for users adding title and description to the list.
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
  const itemDescription = event.target.form.description.value;

  /* check input and update data */
  const warnings = document.getElementById('warnings');
  warnings.innerText = '';

  if (title.length === 0) {
    warnings.innerText = 'Please enter a list title';
    return;
  }

  data[title] = itemDescription;

  /* -- render new words -- */

  /*  
  const toRender = Object.keys(data);
  const newList = renderList(toRender);
*/
  const itemToRender = Object.keys(data);
  const descriptionToRender = Object.values(data);
  const newTable = renderTable(itemToRender, descriptionToRender);

  const listContainer = document.getElementById('display');
  listContainer.innerHTML = '';
  listContainer.appendChild(newTable);
};

/**
 * Entry point for users adding title and description to the list.
 * It is called each time the user press the "Enter" key.
 *
 * @param {Event} event - The event triggered when press the "Enter" key.
 */

export const getInputWithEnterHandler = (event) => {
  /* -- entry point for adding a list -- */
  // debugger;

  /* -- check the target -- */
  if (
    event.target.nodeName !== 'INPUT'
    // && event.target.nodeName !== 'TEXTAREA' // stop handling Enter key on text area.
  ) {
    return;
  }
  if (event.key !== 'Enter') {
    return;
  }
  /* -- disable the default event only for tag INPUT -- */
  if (event.target.nodeName === 'INPUT') {
    event.preventDefault();
  }

  /* -- gather user input from DOM -- */
  const title = event.target.form.text.value;
  const itemDescription = event.target.form.description.value;

  /* check input and update data */
  const warnings = document.getElementById('warnings');
  warnings.innerText = '';

  if (title.length === 0) {
    warnings.innerText = 'Please enter a list title';
    return;
  }

  data[title] = itemDescription;

  /* -- render new words -- */
  /*  
  const toRender = Object.keys(data);
  const newList = renderTable(toRender);
*/
  const itemToRender = Object.keys(data);
  const descriptionToRender = Object.values(data);
  const newTable = renderTable(itemToRender, descriptionToRender);

  const listContainer = document.getElementById('display');
  listContainer.innerHTML = '';
  listContainer.appendChild(newTable);
};
