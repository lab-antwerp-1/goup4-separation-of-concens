export const renderTable = (itemToRender = [], descriptionToRender = []) => {
  // debugger;
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
    descriptionTdEl.innerText = descriptionToRender[i];
    itemTdEl.innerText = itemToRender[i];
    descriptionTrEl.appendChild(descriptionTdEl);
    itemTrEl.appendChild(itemTdEl);
    itemTrEl.appendChild(removeImgEl);
    descriptionTrEl.appendChild(editImgEl);
    tEl.appendChild(itemTrEl);
    tEl.appendChild(descriptionTrEl);
  }
  return tEl;
};
