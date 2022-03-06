import { renderTable } from '../components/render-table.js';
import { data } from '../../data.js';
import { tableSorter } from '../logic/table-sorter.js';

/**
 * Entry point: user interaction. To reveal list sorting options.
 * It is called each time the user clicks the "sort list" icon on footer.
 *
 * @param {Event} event - The event triggered when the user clicks the "sort list" icon.
 *
 */

export const showSort = (event) => {
  // confirm id for user click
  if (event.target.id !== 'sort') {
    return;
  }

  // declare and assign 'display' section on html page to variable
  const displayEl = document.getElementById('display');
  const tEl = document.getElementById('display-table');

  // create and assign dom elements for list sort drop-box menu
  const sortContainer = document.createElement('div');
  sortContainer.id = 'sort-container';
  const sortLabel = document.createElement('label');
  sortLabel.id = 'sort-label';
  sortLabel.className = 'sort-list';
  sortLabel.for = 'select';
  sortLabel.innerHTML = 'Sort List By:';

  // assign sorting options to select drop-box element
  const sortSelect = document.createElement('select');
  sortSelect.id = 'sort-select';
  sortSelect.innerHTML = `
  <option value="-">Choose Sorting Method</option>
  <option value="new">Last to First</option>
  <option value="old">First to Last</option>
  <option value="a">Alphabetical</option>
  <option value="z">Reverse Alphabetical</option>
  <option value="short">Length</option>
  <option value="long">Reverse Length</option>`;
  sortContainer.appendChild(sortLabel);
  sortContainer.appendChild(sortSelect);

  // determine whether to reveal or hide sorting options to user
  if (displayEl.children.length === 2) {
    displayEl.removeChild(displayEl.children[0]);
    return;
  }

  if (displayEl.children[0].children.length !== 0) {
    displayEl.insertBefore(sortContainer, tEl);
  }
};

/**
 * Entry point: user interaction. To arrange list items according to user selection.
 * It is called each time the user makes a choice in the "sort list" select element.
 *
 * @param {Event} event - The event triggered when the user makes a selection in the "select" element.
 *
 */

export const tableSort = (event) => {
  // confirm selection is made in correct selection element
  if (event.target.id !== 'sort-select') {
    return;
  }
  // declare and assign html elements and selection values to variables
  const displayEl = document.getElementById('display');
  displayEl.innerHTML = '';
  const sortType = event.target.value;
  // update data object and list through logic function
  const sorted = tableSorter(Object.keys(data), sortType);
  // render new data object list and display too user
  const newTable = renderTable(sorted, Object.values(data));
  displayEl.appendChild(newTable);
};
