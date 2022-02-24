export const renderTable = (itemToRender = [], descriptionToRender = []) => {
  // debugger;
  const tEl = document.createElement('table');
  for (let i = 0; i < itemToRender.length; i++) {
    const itemTrEl = document.createElement('tr');
    const itemTdEl = document.createElement('td');
    const imgEl = document.createElement('img');
    imgEl.src = 'client/public/trash-2.png';
    const descriptionTrEl = document.createElement('tr');
    const descriptionTdEl = document.createElement('td');
    descriptionTdEl.innerText = descriptionToRender[i];
    itemTdEl.innerText = itemToRender[i];
    descriptionTrEl.appendChild(descriptionTdEl);
    itemTrEl.appendChild(itemTdEl);
    itemTrEl.appendChild(imgEl);
    tEl.appendChild(itemTrEl);
    tEl.appendChild(descriptionTrEl);
  }
  return tEl;
};
