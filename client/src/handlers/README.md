# Handlers

## removeItemHandler

- Entry point: user interaction. To remove a specific item from the list.
- It `import` from:
  - data.js
  - `logic/remove-item.js`
- It `export` to `/listeners/remove-item.js`.

## removeListHandler

- Entry point: user interaction. To remove a specific list.
- It `import` from:
  - data.js
  - `logic/remove-item.js`
- It `export` to `/listeners/remove-item.js`.

## getInputHandler

- `getInputHandler` is entry point for users adding title and item to the list.
- It is called each time the user clicks the "add" button.
- It `export` to listeners `input-items.js`
