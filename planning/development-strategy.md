# development strategy

<!--

  There will be different types of tasks for each user story:
    `type: components`
    `type: css`
    `type: logic`
    `type: handlers`
    ...

-->

---

## planning documents

> As a user/developer I can read a readme of the project and follow the development process.

- [ ] _there is a readme file_
- [ ] _there is a communication plan_
- [ ] _there is a constraints document_
- [ ] _there is a backlog file_
- [ ] _there is a development strategy_
- [ ] _there is a retrospective_

- this will be developed on the branch `planning`.

> As a user/developer I can follow the design process.

- [ ] _there is a mobile wireframe file_
- [ ] _there is a desktop wireframe file_
- [ ] _there is a figma document link_

- this will be developed on the branch `design`.

## Must Haves

0 - page title and header

> As a user I can see what page I am on

- [ ] _there is a page title and header/or intro section_

`type: html`

- [ ] use `h1` for header and `title` for title

`type: css`

- [ ] use `.header` class to stylize header

- this will be developed on the branch `0-header-and-title`.

> As a user I can understand how to use the page

1 - page instructions/intro

- [ ] _there are some instructions or greeting for the user_

`type: html`

- [ ] use `p` for instructions/greeting

`type: css`

- [ ] use `.intro` class to stylize greeting/instructions

- this will be developed on the branch `instructions-section`.

  `type: js`

- use `help` id for button `eventListener` and handler functions

2 - list form

> A user can add new items to their list

- [ ] there is an 'add' button and input bar

`type: html`

- [ ] use `form` and `input` for input section

`type: css`

- [ ] use `.input-section` class to stylize input section

`type: js`

- [ ] use `add` and `input-area` ids for `addEventListener` listeners
- [ ] use `getElementById` and `.appendChild` for handler
- [ ] use `if` conditional for component function

- this will be developed on the branch `2-input-add`.

3 - list display

> A user can see all the items in their list

- [ ] _there is a list display area_

`type: html`

- [ ] use `table`, `tr` and `td` for list display

`type: css`

- [ ] use `.display` class to stylize display section container

`type: js`

- [ ] use `display-table` id for `table` element
- [ ] use `if` conditional, `createElement` and `appendChild` for component function

- this will be developed on the branch `3-list-display`.

4 - remove button

> A user can remove any item from their list

- [ ] _there is a 'remove' button_

`type: html`

- [ ] use `img` for remove button

`type: css`

- [ ] use `.delete-btn` class to stylize button

`type: js`

- [ ] use `remove-${index}` id for button
- [ ] use `addEventListener` for listeners
- [ ] use `getElementById` and `.removeChild` for handler
- [ ] use `if` conditional for component

- this will be developed on the branch `4-remove-button`.

5 - css setup

> As a user I want the page to be pretty and friendly to use

- [ ] _the page looks nice, is accessible and can be used on mobile devices_

`type: css`

- [ ] use `body` and `.page` class to setup general appearance
- [ ] use `.wrap` class for main container `div`.
- [ ] use `flex` display for user view

- this will be developed on the branch `5-css-setup`.

6 - delete reset list

> As a user I can reset or delete an entire list

- [ ] _there is a 'delete list' or 'reset list' button_

`type: html`

- [ ] use `svg` for delete/reset button

`type: css`

- [ ] use `.reset-btn` class to stylize button
- [ ] use `:hover` and `:active` to style button interaction

`type: js`

- [ ] use `reset-list` id and `addEventListener` for listener
- [ ] use `for` loop, `getElementById` and `.removeChild` for handler
- [ ] use `if` conditional for component

- this will be developed on the branch `6-reset-delete`.

---

## Should have's

7 - add and edit item descriptions

> A user can edit the description of each item in their list

- [ ] _There is a 'description' column and 'edit description' button for every list item_

`type: html`

- [ ] use `input` and `img` for description section

`type: css`

- [ ] use `.edit-btn` class to stylize section
- [ ] use `:hover` and `:active` to style button interaction

`type: js`

- [ ] use `edit-${index}` and `new-input-${index}` ids and `addEventListener` for listeners
- [ ] use `getElementById` `if` conditional and `appendChild` for handler
- [ ] use `if` conditional for component

- this will be developed on the branch `7-description-edit`.

8 - done/undone checkbox

> A user can mark an item as "done" or "not done"

- [ ] _There is a checkbox for every item in the list_

`type: html`

- [ ] use `input` and `checkbox` for checkbox

`type: css`

- [ ] use `.check`, `.check-in` and `check-icon` classes to stylize checkbox

- this will be developed on the branch `8-checkbox`.

9 - sort list

> As a user I can sort my list in different ways

- [ ] _there is a 'sort' drop-menu for different sorting methods_

`type: html`

- [ ] use `select` and `option` for dropbox

`type: css`

- [ ] use `.sort-list` class to stylize sort section

`type: js`

- [ ] use `sort-label` id and `addEventListener` for listener
- [ ] use `getElementById` `createChild` and `appendChild` for handler
- [ ] use `if` conditional for logic/component

- this will be developed on the branch `9-sort-dropbox`.

10 - change font

> As a user I can change the font and stylization of my list items

- [ ] _there is a 'stylize' function on the page_

`type: html`

- [ ] use `select` and `option` for style dropbox

`type: css`

- [ ] use `.font` class to stylize change font section

`type: js`

- [ ] use `addEventListener` for listener
- [ ] use `innerHTML` for handler
- [ ] use `if` conditional for logic/component

- this will be developed on the branch `10-change-font`.

11 - keyboard assignments

> As a user I can use my keyboard buttons to confirm or cancel choices

- [ ] _the page is responsive to the user's keyboard_

`type: js`

- [ ] use `addEventListener` for listener
- [ ] use `innerHTML` for handler
- [ ] use `if` conditional for logic/component

- this will be developed on the branch `11-keyboard`.

---

## Could have's

12 - share/export

> As a user I can share my lists with others

- [ ] _there is a 'share' section on the page_

`type: html`

- [ ] use `input` and `button` for share/export section

`type: css`

- [ ] use `.share` class to stylize export section

`type: js`

- [ ] use `addEventListener` for listener
- [ ] use `for` for handler
- [ ] use `if` conditional for logic/component

- this will be developed on the branch `12-share-export`.

13 - list formatting

> As a user I want the page to help me use it correctly

`type: html`

- [ ] use `code` for warning

`type: css`

- [ ] use `.warning` class to stylize warning message

`type: js`

- [ ] use `warnings` id in handlers
- [ ] use `if` conditional for logic/component

- [ ] _there is a warning when user enters list item without a title_
- [ ] _there is a warning when user edits an item description_
