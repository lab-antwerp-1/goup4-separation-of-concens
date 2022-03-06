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

``html

<!-- svg edit btn -->

<!-- <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 16.6667H17.5" stroke="#3E3B3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.75 2.91666C14.0815 2.58514 14.5312 2.3989 15 2.3989C15.2321 2.3989 15.462 2.44462 15.6765 2.53346C15.891 2.6223 16.0858 2.75251 16.25 2.91666C16.4142 3.08081 16.5444 3.27569 16.6332 3.49017C16.722 3.70464 16.7678 3.93452 16.7678 4.16666C16.7678 4.39881 16.722 4.62868 16.6332 4.84316C16.5444 5.05763 16.4142 5.25251 16.25 5.41666L5.83333 15.8333L2.5 16.6667L3.33333 13.3333L13.75 2.91666Z" stroke="#3E3B3B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> -->

<!-- remove btn svg -->

<!--
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 5H4.16667H17.5" stroke="#BC0808" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.66667 5.00001V3.33334C6.66667 2.89131 6.84226 2.46739 7.15482 2.15483C7.46738 1.84227 7.89131 1.66667 8.33333 1.66667H11.6667C12.1087 1.66667 12.5326 1.84227 12.8452 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3452 17.8452C15.0326 18.1577 14.6087 18.3333 14.1667 18.3333H5.83333C5.39131 18.3333 4.96738 18.1577 4.65482 17.8452C4.34226 17.5326 4.16667 17.1087 4.16667 16.6667V5.00001H15.8333Z" stroke="#BC0808" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.33333 9.16667V14.1667" stroke="#BC0808" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.6667 9.16667V14.1667" stroke="#BC0808" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> -->

```

```
