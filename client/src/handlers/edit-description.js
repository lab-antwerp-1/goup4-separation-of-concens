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
  const table = document.getElementById('display-table');
  const eventTr = event.target.parentElement.parentElement.id;
  // check index value for event parent table row element
  const findTableIndex = (par1, par2) => {
    let sum = 0;
    for (let i = 0; i < par1.children.length; i++) {
      if (par1.children[i].id === par2) {
        sum = i;
      }
    }
    return sum;
  };

  // compare element index to event index to make sure user clicked edit button element
  const index = (findTableIndex(table, eventTr) + 2) / 2;
  const indexOfTarget = Array.from(
    event.target.parentElement.parentNode.children,
  ).indexOf(event.target.parentElement);

  const kid = document.getElementById(`description-row-${index}`);
  // add condition to assure button clicked is of the same element as input description box
  if (event.target.id !== `edit-${index}` || kid.children.length !== 2) {
    return;
  }

  // remove event listener
  document
    .getElementById('display')
    .removeEventListener('click', editDescription);
  // establish index of description element
  const indexOfItem = indexOfTarget - 1;
  const itemTitle =
    event.target.parentElement.parentElement.children[indexOfItem].textContent;

  // get warning element and new description input
  const warnings = document.getElementById('warnings');
  const description = document.getElementById(`new-input-${index}`);
  // assign new description to variable
  const toRenderDescription = description.value;
  // update data table list object
  data[itemTitle] = toRenderDescription;
  // update the UI
  const newTable = renderTable(Object.keys(data), Object.values(data));
  const listContainer = document.getElementById('display');
  listContainer.innerHTML = '';
  listContainer.appendChild(newTable);
  // remove update description warning message
  warnings.innerHTML = '';

  // add new-description listener
  document.getElementById('display').addEventListener('click', newDescription);
};
