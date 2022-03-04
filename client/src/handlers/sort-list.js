import { renderTable } from '../components/render-table.js';
import { data } from '../../data.js';
import { tableSorter } from '../logic/table-sorter.js';

export const showSort = (event) => {
  if (event.target.id !== 'sort') {
    return;
  }

  const displayEl = document.getElementById('display');
  const tEl = document.getElementById('display-table');

  const sortContainer = document.createElement('div');
  sortContainer.id = 'sort-container';
  const sortLabel = document.createElement('label');
  sortLabel.id = 'sort-label';
  sortLabel.className = 'sort-list';
  sortLabel.for = 'select';
  sortLabel.innerHTML = 'Sort List By:';

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

  if (displayEl.children.length === 2) {
    displayEl.removeChild(displayEl.children[0]);
    return;
  }

  if (displayEl.children[0].children.length !== 0) {
    displayEl.insertBefore(sortContainer, tEl);
  }
};

export const tableSort = (event) => {
  if (event.target.id !== 'sort-select') {
    return;
  }
  const displayEl = document.getElementById('display');
  displayEl.innerHTML = '';
  const sortType = event.target.value;
  const sorted = tableSorter(Object.keys(data), sortType);
  const newTable = renderTable(sorted, Object.values(data));
  displayEl.appendChild(newTable);
};
