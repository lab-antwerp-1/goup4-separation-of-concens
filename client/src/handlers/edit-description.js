import { data } from '../../data.js';
import { renderTable } from '../components/render-table.js';
/**
 * Entry point: user interaction. To edit a list item description.
 * It is called each time the user clicks the "edit" icon.
 *
 * @param {Event} event - The event triggered when the user clicks the "edit" icon.
 *
 */

export const editDescription = (event) => {
  // debugger;
  // check the event target
  if (event.target.id !== 'edit') {
    return;
  }
  // process user input, and get component index.
  const indexOfTarget = Array.from(event.target.parentNode.children).indexOf(
    event.target,
  );
  const indexOfDescription = indexOfTarget - 1;
  const itemDescription =
    event.target.parentElement.children[indexOfDescription].textContent;
  /*
  const warnings = document.getElementById('warnings');
  warnings.innerText = '';
  warnings.innerText = 'Please enter new description';
*/
  /*
  const description = document.getElementById('description');
  const newDescription = description.value;
*/
  const newDescription = prompt('please enter new description');

  // update state
  data[`${itemDescription}`] = newDescription;

  // update the UI
  const newList = renderTable(Object.keys(data), Object.values(data));

  const listContainer = document.getElementById('display');
  listContainer.innerHTML = '';
  listContainer.appendChild(newList);
};
