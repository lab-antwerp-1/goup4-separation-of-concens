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
  sortLabel.for = 'select';
  sortLabel.innerHTML = 'Sort List By:';

  const sortSelect = document.createElement('select');
  sortSelect.id = 'sort-select';
  sortSelect.innerHTML = `<option value="new">First to Last</option>
  <option value="old">Last to First</option>
  <option value="a">Alphabetical</option>
  <option value="z">Reverse Alphabetical</option>
  <option value="short">Length</option>
  <option value="long">Reverse Length</option>`;
  sortContainer.appendChild(sortLabel);
  sortContainer.appendChild(sortSelect);

  if (displayEl.children.length === 1) {
    displayEl.insertBefore(sortContainer, tEl);
    return;
  }
  if (displayEl.children.length === 2) {
    displayEl.removeChild(displayEl.children[0]);
  }
};
