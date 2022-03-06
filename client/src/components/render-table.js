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
    const removeImgEl = document.createElement('i');
    removeImgEl.innerHTML = `<svg class="delete-btn"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 5H4.16667H17.5" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.66667 5.00001V3.33334C6.66667 2.89131 6.84226 2.46739 7.15482 2.15483C7.46738 1.84227 7.89131 1.66667 8.33333 1.66667H11.6667C12.1087 1.66667 12.5326 1.84227 12.8452 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3452 17.8452C15.0326 18.1577 14.6087 18.3333 14.1667 18.3333H5.83333C5.39131 18.3333 4.96738 18.1577 4.65482 17.8452C4.34226 17.5326 4.16667 17.1087 4.16667 16.6667V5.00001H15.8333Z" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.33333 9.16667V14.1667" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.6667 9.16667V14.1667" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
    removeImgEl.children[0].id = `remove-${index}`;
    const descriptionTrEl = document.createElement('tr');
    const descriptionTdEl = document.createElement('td');
    descriptionTrEl.id = `description-row-${index}`;
    descriptionTdEl.id = `description-td-${index}`;
    const editImgEl = document.createElement('i');
    editImgEl.innerHTML = `<svg class="edit-btn" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.0052 16.6667H17.5052" stroke="#3E3B3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.7552 2.91666C14.0868 2.58514 14.5364 2.3989 15.0052 2.3989C15.2374 2.3989 15.4673 2.44462 15.6817 2.53346C15.8962 2.6223 16.0911 2.75251 16.2552 2.91666C16.4194 3.08081 16.5496 3.27569 16.6385 3.49017C16.7273 3.70464 16.773 3.93452 16.773 4.16666C16.773 4.39881 16.7273 4.62868 16.6385 4.84316C16.5496 5.05763 16.4194 5.25251 16.2552 5.41666L5.83858 15.8333L2.50525 16.6667L3.33858 13.3333L13.7552 2.91666Z" stroke="#3E3B3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
    editImgEl.children[0].id = `edit-${index}`;
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
