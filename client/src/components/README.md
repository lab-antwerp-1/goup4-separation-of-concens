# Components

- renderTable function from _render-table.js_

## description

> renderTable renders the user inputted data into a `table` element containing `tr` rows for item titles and descriptions, `img` buttons and `td` elements to be displayed to the user.
> the `img`, `td` and `tr` elements are appended to the table with an indexed id.

## export

- _index.js_
- _input-items.js_ _handler_
- _remove-item.js_ _handler_
- _edit-description.js_ _handler_

## html element

- create `table` element by `display-table` id.
- create `tr` element for item title by `item-row-${index}` id and `tr` element for item description by `description-row-${index}` id.

- create `img` element for remove button by `remove-${index}` id and `img` element for edit button by `edit-${index}` id.

- create `td` element for item title by `item-td-${index}` id and `td` element for item description by `description-td-${index}` id.

- append item title element and button elements to item row. append description element to description row and append rows to table element.

## return

`table` element with all appended children elements.

## reference

```js
/*

// itemTdEl.contentEditable = true;


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
  
second reference:

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
