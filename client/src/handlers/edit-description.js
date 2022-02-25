import { data } from '../../data.js';
import { renderTable } from '../components/render-table.js';
import { newDescription } from './new-description.js';
/**
 * Entry point: user interaction. To edit a list item description.
 * It is called each time the user clicks the "edit" icon.
 *
 * @param {Event} event - The event triggered when the user clicks the "edit" icon.
 *
 */

export const editDescription = (event) => {
  document
    .getElementById('display')
    .removeEventListener('click', editDescription);

  // debugger;
  // check the event target
  if (event.target.id !== 'edit') {
    return;
  }
  // process user input, and get component index.
  const indexOfTarget = Array.from(event.target.parentNode.children).indexOf(
    event.target,
  );
  const indexOfItem = indexOfTarget - 1;
  const itemTitle =
    event.target.parentElement.children[indexOfItem].textContent;

  // <p contenteditable="true">This is an editable paragraph.</p>

  /*
  const warnings = document.getElementById('warnings');
  warnings.innerText = '';
  warnings.innerText = 'Please enter new description';
*/
  /*
  data[`${itemTitle}`] = null;
  // let newDescription = '';
  const warnings = document.getElementById('warnings');
  warnings.innerText = 'Please enter new description';
  const changeDescription = document.createElement('input');
  const descriptionButton = document.createElement('button');
  descriptionButton.id = 'description-button';
  descriptionButton.type = 'submit';
  descriptionButton.innerHTML = 'update description';
  changeDescription.type = 'text';
  changeDescription.id = 'description-input';
  warnings.appendChild(descriptionButton);
  warnings.appendChild(changeDescription);
*/
  // const description = document.getElementById('description');
  // const newDescription = description.value;

  // const newDescription = prompt('please enter new description');

  const warnings = document.getElementById('warnings');
  const description = document.getElementById('new-input');
  const toRenderDescription = description.value;
  // update state

  data[itemTitle] = toRenderDescription;

  // update the UI
  const newTable = renderTable(Object.keys(data), Object.values(data));

  const listContainer = document.getElementById('display');
  listContainer.innerHTML = '';
  listContainer.appendChild(newTable);
  warnings.removeChild(description);
  warnings.innerHTML = '';
  document.getElementById('display').addEventListener('click', newDescription);
};
