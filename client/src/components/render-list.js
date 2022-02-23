export const renderList = (toRender = []) => {
  const tEl = document.createElement('table');
  for (const nextItem of toRender) {
    const trEl = document.createElement('tr');
    const tdEl = document.createElement('td');
    tdEl.innerText = nextItem;
    const imgEl = document.createElement('img');
    imgEl.src = 'client/public/trash-2.png';
    trEl.appendChild(tdEl);
    trEl.appendChild(imgEl);
    tEl.appendChild(trEl);
  }
  return tEl;
};
