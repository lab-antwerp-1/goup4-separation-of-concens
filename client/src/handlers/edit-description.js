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
  const indexOfItem = indexOfTarget - 1;
  const itemTitle =
    event.target.parentElement.children[indexOfItem].textContent;

  // <p contenteditable="true">This is an editable paragraph.</p>

  /*
  const warnings = document.getElementById('warnings');
  warnings.innerText = '';
  warnings.innerText = 'Please enter new description';
*/

  data[`${itemTitle}`] = null;
  let newDescription = '';
  if (data[`${itemTitle}`] === null) {
    const warnings = document.getElementById('warnings');
    warnings.innerText = '';
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
    const description = document.getElementById('description-input');
    newDescription = description.value;
  }

  // const description = document.getElementById('description');
  // const newDescription = description.value;

  // const newDescription = prompt('please enter new description');

  // update state
  data[`${itemTitle}`] = newDescription;

  // update the UI
  const newList = renderTable(Object.keys(data), Object.values(data));

  const listContainer = document.getElementById('display');
  listContainer.innerHTML = '';
  listContainer.appendChild(newList);
};
