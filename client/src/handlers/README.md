# Handlers

## getInputHandler

- `getInputHandler` is entry point for users adding title and description to the list.
- It is called each time the user clicks the "add" button.
- It `import` from:
  - data.js
  - /components/render-list.js
- It `export` to listeners `input-items.js`

## getInputWithEnterHandler

- `getInputWithEnterHandler` is entry point for users adding title and description to the list.
- It is called each time the user press the "Enter" key.
- It `import` from:
  - data.js
  - /components/render-list.js
- It `export` to listeners `input-items.js`

## removeListHandler

- Entry point: user interaction. To remove a specific list.
- It is called each time the user clicks the "delete"icon.
- It`import` from:
  - data.js
  - /components/render-list.js
- It `export` to listeners `input-items.js`

## references

```js
/*
    reference 3

  data[`${itemTitle}`] = null;
  // let newDescription = '';
  const warnings = document.getElementById('warnings');
  warnings.innerText = 'Please enter new description';
  const changeDescription = document.createElement('input');
  const descriptionButton = document.createElement('button');
  descriptionButton.id = 'description-button';
  descriptionButton.type = 'submit';
  descriptionButton.innerHTML = 'update description';
  changeDescription.type = 'text';
  changeDescription.id = 'description-input';
  warnings.appendChild(descriptionButton);
  warnings.appendChild(changeDescription);
*/
```
