/* eslint-disable */
export const renderTable = (data) => {
  // debugger;

  const itemToRender = Object.keys(data);
  const descriptionToRender = Object.values(data);
  const tEl = document.createElement('table');
  for (let i = 0; i < itemToRender.length; i++) {
    const itemTrEl = document.createElement('tr');
    const itemTdEl = document.createElement('td');
    const removeImgEl = document.createElement('img');
    removeImgEl.src = 'client/public/trash-2.png';
    removeImgEl.id = 'remove-item';
    const descriptionTrEl = document.createElement('tr');
    const descriptionTdEl = document.createElement('td');
    const editImgEl = document.createElement('img');
    editImgEl.src = 'client/public/description-edit-3.png';
    editImgEl.id = 'edit';
    descriptionTdEl.innerText = descriptionToRender[i];
    itemTdEl.innerText = itemToRender[i];
    descriptionTrEl.appendChild(descriptionTdEl);
    itemTrEl.appendChild(itemTdEl);
    itemTrEl.appendChild(editImgEl);
    itemTrEl.appendChild(removeImgEl);
    tEl.appendChild(itemTrEl);
    tEl.appendChild(descriptionTrEl);
  }
  return tEl;
};
