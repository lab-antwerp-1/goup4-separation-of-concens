# Listeners

- _input-items.js_
- _remove-list.js_
- _new-description.js_
- _edit-description.js_
- _help-section.js_
- _sort-list.js_

## description

> setup event listeners for input item title and description box, remove button and edit description click event
> call handler functions

### import handlers

- _inputWord_ handler
- _getInputHandler_ handler
- _getInputWithEnterHandler_ handler

- _removeListHandler_ handler

- _newDescription_ handler
- _editDescription_ handler

- _help-section_ handler
- _sort-list_ handler

### html target elements

- add `button` by `add` id on `click`
- `input` add item and description textarea box by `input-area` id on `keydown` enter

- remove `img` by `display` id on click

- edit `img` button by `edit-${index}` id on `click`

- `sort` id `i` and `svg` element on `click`
- `sort-select` id `select` element on `change`

### note

> edit-description listener is added and remove on initialization but is re-added later by handler
