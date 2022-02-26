# Components

## reference

```js
/*
first reference:

  const ulEl = document.createElement('ul');
  const imgEl = document.createElement('img');

  for (const nextItem of toRender) {
    const liEl = document.createElement('li');
    liEl.innerText = nextItem;
    imgEl.src = 'client/public/trash-2.png';
    liEl.appendChild(imgEl);
    ulEl.appendChild(liEl);
  }

  //   var product=document.getElementById('prod1').src;

  return ulEl;
  
second item render reference:

export const renderList = (toRender = []) => {
  // debugger;
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
*/
```
