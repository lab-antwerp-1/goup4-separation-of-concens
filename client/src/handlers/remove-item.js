import { data } from '../../data.js';
import { renderTable } from '../components/render-table.js';
/**
 * Entry point: user interaction. To remove a specific list.
 * It is called each time the user clicks the "delete"icon.
 *
 * @param {Event} event - The event triggered when the user clicks the "delete" icon.
 *
 */

export const removeListHandler = (event) => {
  // debugger;
  // check the event target
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  // process user input, and get component index.
  const indexOfTarget = Array.from(event.target.parentNode.children).indexOf(
    event.target,
  );
  const indexOfTitle = indexOfTarget - 1;
  const title = event.target.parentElement.children[indexOfTitle].textContent;

  // update state
  delete data[`${title}`];

  // update the UI
  const newList = renderTable(Object.keys(data));

  const listContainer = document.getElementById('display');
  listContainer.innerHTML = '';
  listContainer.appendChild(newList);
};
