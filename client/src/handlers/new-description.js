import { editDescription } from './edit-description.js';

/**
 * Entry point: user interaction. To edit a list item description.
 * It is called each time the user clicks the "edit" icon.
 *
 * @param {Event} event - The event triggered when the user clicks the "edit" icon.
 *
 */

export const newDescription = (event) => {
  const table = document.getElementById('display-table');
  const eventTr = event.target.parentElement.id;
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
  if (event.target.id !== `edit-${index}`) {
    return;
  }
  // remove event listener
  document
    .getElementById('display')
    .removeEventListener('click', newDescription);
  // edit and reveal warning message to user
  const warnings = document.getElementById('warnings');
  warnings.innerHTML =
    'please enter a new description and click the pen icon to save';
  // create and append new description input element to description
  const newDescriptionInput = document.createElement('input');
  newDescriptionInput.id = `new-input-${index}`;
  newDescriptionInput.placeholder = 'new description';
  const descriptionRow = document.getElementById(`description-row-${index}`);
  descriptionRow.appendChild(newDescriptionInput);
  // add edit-description listener
  document.getElementById('display').addEventListener('click', editDescription);
};
