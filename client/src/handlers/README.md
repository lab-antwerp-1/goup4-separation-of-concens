# Handlers

## getInputHandler

- `getInputHandler` is entry point for users adding title and item to the list.
- It is called each time the user clicks the "add" button.
- It `export` to listeners `input-items.js`

## removeListHandler

- Entry point: user interaction. To remove a specific list.
- It is called each time the user clicks the "delete"icon.
- It`import` from:
  - data.js
  - /components/render-list.js
- It `export` to listeners `input-items.js`
