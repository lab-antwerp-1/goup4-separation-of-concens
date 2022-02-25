# Handlers

## getInputHandler

- `getInputHandler` is entry point for users adding title and description to the list.
- It is called each time the user clicks the "add" button.
- It `import` from:
  - data.js
  - /components/render-table.js
- It `export` to listeners `input-items.js`

## getInputWithEnterHandler

- `getInputWithEnterHandler` is entry point for users adding title and description to the list.
- It is called each time the user press the "Enter" key.
- It `import` from:
  - data.js
  - /components/render-table.js
- It `export` to listeners `input-items.js`

## removeListHandler

- Entry point: user interaction. To remove a specific list.
- It is called each time the user clicks the "delete"icon.
- It`import` from:
  - data.js
  - /components/render-table.js
- It `export` to listeners `remove-list.js`

# removeAllListHandler

- Entry point: user interaction. To remove the entire list.
- It is called each time the user clicks the "trash can" img at the bottom.
- It`import` from:
  - data.js
  - /components/render-table.js
- It `export` to listeners `remove-list.js`
