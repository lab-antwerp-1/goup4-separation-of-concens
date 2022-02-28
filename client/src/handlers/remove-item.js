import { data } from '../../data.js';
import { renderTable } from '../components/render-table.js';
/**
 * Entry point: user interaction. To remove a specific list.
 * It is called each time the user clicks the "trash can" img.
 *
 * @param {Event} event - The event triggered when the user clicks the "delete" icon.
 *
 */

export const removeListHandler = (event) => {
  // debugger;
  // check the event target
  const table = document.getElementById('display-table');
  const eventTr = event.target.parentElement.id;
  const findTableIndex = (par1, par2) => {
    let sum = 0;
    for (let i = 0; i < par1.children.length; i++) {
      if (par1.children[i].id === par2) {
        sum = i;
      }
    }
    return sum;
  };
  const index = (findTableIndex(table, eventTr) + 2) / 2;

  if (event.target.id !== `remove-${index}`) {
    return;
  }

  // process user input, and get component index.
  const indexOfTarget = Array.from(event.target.parentNode.children).indexOf(
    event.target,
  );
  const indexOfTitle = indexOfTarget - 2;
  const title = event.target.parentElement.children[indexOfTitle].textContent;

  // update state
  delete data[title];

  // update the UI
  const newTable = renderTable(Object.keys(data), Object.values(data));

  const listContainer = document.getElementById('display');
  listContainer.innerHTML = '';
  listContainer.appendChild(newTable);
};

/**
 * Entry point: user interaction. To remove the entire list.
 * It is called each time the user clicks the "trash can" img.
 *
 * @param {Event} event - The event triggered when the user clicks the "trash can" img.
 *
 */

export const removeAllListHandler = (event) => {
  // debugger;
  // check the event target
  if (event.target.id !== 'reset-list') {
    return;
  }
  // update state
  for (const key in data) {
    delete data[key];
  }
  // update the UI
  const newTable = renderTable(Object.keys(data), Object.values(data));
  const listContainer = document.getElementById('display');
  listContainer.innerHTML = '';
  listContainer.appendChild(newTable);
};
