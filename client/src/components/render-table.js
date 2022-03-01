/**
 * A function that renders a table element from user inputted item title and description string arrays.
 *
 * @param {Array} itemToRender - The string array to render into item title table data element.
 * @param {Array} descriptionToRender - The string array to render into item description data element.
 * @returns {string} Will return a table of list items and descriptions in a string.
 * 
 * @example
 * 
  // ["item title 1", "item title 2"], ["item description 1", "item description 2"] 
  --> "<table id="display-table">
        <tr id="item-row-1">
         <td id=item-td-1">item title 1</td>
         <img src="client/public/description-edit-3.png" id="edit-1">
         <img src="client/public/trash-2.png" id="remove-1">
        </tr>
        <tr id="description-row-1">
         <td id="description-td-1">item description 1</td>
        </tr>
        <tr id="item-row-2">
         <td id=item-td-2">item title 2</td>
         <img src="client/public/description-edit-3.png" id="edit-2">
         <img src="client/public/trash-2.png" id="remove-2">
        </tr>
        <tr id="description-row-2">
         <td id="description-td-2">item description 2</td>
        </tr>
       </table>"
 */

export const renderTable = (itemToRender = [], descriptionToRender = []) => {
  // declare table element
  const tEl = document.createElement('table');
  tEl.id = 'display-table';
  // for loop to index array values
  tEl.classList.add('table');
  for (let i = 0; i < itemToRender.length; i++) {
    const index = i + 1;
    // declare and index id table elements
    const checkEl = document.createElement('label');
    checkEl.className = 'check';
    const checkInEl = document.createElement('input');
    checkInEl.type = 'checkbox';
    checkInEl.className = 'check-in';
    const checkIconEl = document.createElement('span');
    checkIconEl.className = 'check-icon';
    checkEl.appendChild(checkInEl);
    checkEl.appendChild(checkIconEl);
    const itemTrEl = document.createElement('tr');
    itemTrEl.classList.add('row');
    const itemTdEl = document.createElement('td');
    itemTrEl.id = `item-row-${index}`;
    itemTdEl.id = `item-td-${index}`;
    itemTdEl.classList.add('item-td');
    const removeImgEl = document.createElement('img');
    removeImgEl.src = 'client/public/trash-2.png';
    removeImgEl.id = `remove-${index}`;
    const descriptionTrEl = document.createElement('tr');
    const descriptionTdEl = document.createElement('td');
    descriptionTrEl.id = `description-row-${index}`;
    descriptionTdEl.id = `description-td-${index}`;
    const editImgEl = document.createElement('img');
    editImgEl.src = 'client/public/description-edit-3.png';
    editImgEl.id = `edit-${index}`;
    descriptionTdEl.innerText = descriptionToRender[i];
    itemTdEl.innerText = itemToRender[i];
    // append images and table elements to table
    descriptionTrEl.appendChild(descriptionTdEl);
    itemTrEl.appendChild(checkEl);
    itemTrEl.appendChild(itemTdEl);
    itemTrEl.appendChild(editImgEl);
    itemTrEl.appendChild(removeImgEl);
    tEl.appendChild(itemTrEl);
    tEl.appendChild(descriptionTrEl);
  }
  return tEl;
};
