# Handlers

## functions

- _getInputHandler_ from _input-items.js_
- _removeListHandler_ from _remove-items.js_
- _newDescription_ from _new-description.js_
- _editDescription_ from _edit-description.js_
- _helpSection_ from _help-section.js_

## description

### getInputHandler

- `getInputHandler` is entry point for users adding title and description to the list.
- It is called each time the user clicks the "add" button.
- It `import` from:
  - data.js
  - /components/render-table.js
- It `export` to listeners `input-items.js`

### getInputWithEnterHandler

- `getInputWithEnterHandler` is entry point for users adding title and description to the list.
- It is called each time the user press the "Enter" key.
- It `import` from:
  - data.js
  - /components/render-table.js
- It `export` to listeners `input-items.js`

### removeListHandler

- Entry point: user interaction. To remove a specific list.
- It is called each time the user clicks the "delete"icon.
- It`import` from:
  - data.js
  - /components/render-list.js
- It `export` to listeners `input-items.js`

### newDescription

- Entry point: user interaction. To reveal edit input list item description.

- Function is called when user clicks `edit-${index}` `img` button.

- `import` from second `edit-description.js` listener

> function first calculates index value for its target element id. it then checks the user clicked the correct `img` button for its element index by comparing it to the other elements in the parent `table` element.
> function then removes its listener so it doesn't cancels out the second listener.
> the function edits the `warning` element `innerHTML` to let the user know to edit the description.
> function then creates and appends `input` field for new item description to the `tr` element and displays it to the user.
> function then adds the `edit-description` listener.

- `export` to `edit-description` listener,

### editDescription

- Entry point: user interaction. To edit item list description.

- Function is called on user click `edit-${index}` button `img`.

- `import` from `data.js`, `render-table.js` component function and second `new-description.js` listener.

> function first calculates index value for its target element id. it then checks the user clicked the correct `img` button for its element index by comparing it to the other elements in the parent `table` element. it also checks that the clicked button index is the correct one for the edited list item description.
> function then removes its listener so it doesn't cancels out the second listener.
> the function updates the `td` description element `innerHTML` to the new user inputted description.
> function then updates the data `table` item object and renders the updated list to the user with the `render-table.js` component function.
> function then adds the `new-description` listener.

- `export` to `new-description` listener,

### helpSection

- Entry point: user interaction. To reveal or hide page instructions.

- Function is called on user click `help` button `img`.

> Function reveals and hides user instructions for the page.
> When the function is called it first checks if user clicked the correct `img` button through the `help` id.
> The function then checks the `intro` div for children element numbers. If there is one children element the function will create and append a `p` element with the user instructions to reveal to the user. If the `intro` section has two children elements the `p` instructions element is removed from the parent element.

- `export` to `help-section.js` listener.

## references

### newDescription reference

```js
/* 
 reference 1 - does not work

 if (
    event.target.parentElement.parentElement.children[1].children.length === 2
  ) {
    console.log('nope');
    return;
  }
*/

/*
reference 2 - does not work

  const warnings = document.getElementById('warnings');
  warnings.innerHTML = 'please enter a new description';
  const newDescriptionInput = document.createElement('input');
  newDescriptionInput.id = 'new-input';
  newDescriptionInput.placeholder = 'new description';
  warnings.appendChild(newDescriptionInput);
*/
// const index = preIndex / 2;
// console.log(table.id, eventTr.id, index);

// const indexOfTarget = Array.from(event.target.parentNode.children).indexOf(
//   event.target,
// );
/* 
  const indexOfItem = indexOfTarget + 1;
  const itemTitle =
    event.target.parentElement.children[indexOfItem].textContent;
*/

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

### editDescription reference

```js
/*
// reference 1 doesn't work

console.log(event.target.parentElement.nextElementSibling.id);
if (
event.target.parentElement.parentElement.children[1].children.length !== 2
) {
console.log('nope2');
console.log(
event.target.parentElement.parentElement.children[1].children.length,
);
return;
}
*/

/*
reference 2 doesn't work

console.log(description.innerText);
 const descriptionTd = document.getElementById(`description-td-${index}`);
   const descriptionRow = document.getElementById(`description-row-${index}`);
   description.innerHTML = '';
  const toRenderDescription = 'great';
*/

/*
reference 3 works

const warnings = document.getElementById('warnings');
  const description = document.getElementById('new-input');
  const toRenderDescription = description.value;
 */

// <p contenteditable="true">This is an editable paragraph.</p>

/*
reference 4 does not work

  const warnings = document.getElementById('warnings');
  warnings.innerText = '';
  warnings.innerText = 'Please enter new description';
*/
// const description = document.getElementById('description');
// const newDescription = description.value;

// reference 5 works
// const newDescription = prompt('please enter new description');
```

=======

- /components/render-table.js
- It `export` to listeners `remove-list.js`

# removeAllListHandler

- Entry point: user interaction. To remove the entire list.
- It is called each time the user clicks the "trash can" img at the bottom.
- It`import` from:
  - data.js
  - /components/render-table.js
- It `export` to listeners `remove-list.js`
