<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TREE -->

> [interactive graph](./dependency-graph.html)

![dependency graph](./dependency-graph.svg)

<!-- END TREE -->

<!-- BEGIN TOC -->

- public
- src
  - components
    - [render-table.js](#clientsrccomponentsrender-tablejs)
  - handlers
    - [edit-description.js](#clientsrchandlersedit-descriptionjs)
    - [help-section.js](#clientsrchandlershelp-sectionjs)
    - [input-items.js](#clientsrchandlersinput-itemsjs)
    - [new-description.js](#clientsrchandlersnew-descriptionjs)
    - [remove-item.js](#clientsrchandlersremove-itemjs)
    - [sort-list.js](#clientsrchandlerssort-listjs)
  - init
    - [index.js](#clientsrcinitindexjs)
  - listeners
    - [edit-description.js](#clientsrclistenersedit-descriptionjs)
    - [help-section.js](#clientsrclistenershelp-sectionjs)
    - [input-items.js](#clientsrclistenersinput-itemsjs)
    - [remove-list.js](#clientsrclistenersremove-listjs)
    - [sort-list.js](#clientsrclistenerssort-listjs)
  - logic
    - [table-sorter.js](#clientsrclogictable-sorterjs)
- styles
- [data.js](#clientdatajs)

---

<!-- END TOC -->

<!-- BEGIN DOCS -->

# /public

---

# /src

## /components

<details><summary><a href="../../client/src/components/render-table.js" id="clientsrccomponentsrender-tablejs">../client/src/components/render-table.js</a></summary>

<a name="renderTable"></a>

## renderTable ⇒ <code>string</code>

A function that renders a table element from user inputted item title and description string arrays.

**Returns**: <code>string</code> - Will return a table of list items and descriptions in a string.

| Param               | Type               | Description                                                    |
| ------------------- | ------------------ | -------------------------------------------------------------- |
| itemToRender        | <code>Array</code> | The string array to render into item title table data element. |
| descriptionToRender | <code>Array</code> | The string array to render into item description data element. |

**Example**

```js
// ["item title 1", "item title 2"], ["item description 1", "item description 2"]
  --> "<table id="display-table">
        <tr id="item-row-1">
         <td id=item-td-1">item title 1</td>
         <img src="client/public/description-edit-3.png" id="edit-1">
         <img src="client/public/trash-2.png" id="remove-1">
        </tr>
        <tr id="description-row-1">
         <td id="description-td-1">item description 1</td>
        </tr>
        <tr id="item-row-2">
         <td id=item-td-2">item title 2</td>
         <img src="client/public/description-edit-3.png" id="edit-2">
         <img src="client/public/trash-2.png" id="remove-2">
        </tr>
        <tr id="description-row-2">
         <td id="description-td-2">item description 2</td>
        </tr>
       </table>"
```

</details>

---

## /handlers

<details><summary><a href="../../client/src/handlers/edit-description.js" id="clientsrchandlersedit-descriptionjs">../client/src/handlers/edit-description.js</a></summary>

<a name="editDescription"></a>

## editDescription

Entry point: user interaction. To edit a list item description.
It is called each time the user clicks the "edit" icon.

| Param | Type               | Description                                               |
| ----- | ------------------ | --------------------------------------------------------- |
| event | <code>Event</code> | The event triggered when the user clicks the "edit" icon. |

</details>

<details><summary><a href="../../client/src/handlers/help-section.js" id="clientsrchandlershelp-sectionjs">../client/src/handlers/help-section.js</a></summary>

</details>

<details><summary><a href="../../client/src/handlers/input-items.js" id="clientsrchandlersinput-itemsjs">../client/src/handlers/input-items.js</a></summary>

## Constants

<dl>
<dt><a href="#getInputHandler">getInputHandler</a></dt>
<dd><p>Entry point for users adding title and description to the list.
It is called each time the user clicks the &quot;add&quot; button.</p>
</dd>
<dt><a href="#getInputWithEnterHandler">getInputWithEnterHandler</a></dt>
<dd><p>Entry point for users adding title and description to the list.
It is called each time the user press the &quot;Enter&quot; key.</p>
</dd>
</dl>

<a name="getInputHandler"></a>

## getInputHandler

Entry point for users adding title and description to the list.
It is called each time the user clicks the "add" button.

| Param | Type               | Description                                          |
| ----- | ------------------ | ---------------------------------------------------- |
| event | <code>Event</code> | The event triggered when the user clicks the button. |

<a name="getInputWithEnterHandler"></a>

## getInputWithEnterHandler

Entry point for users adding title and description to the list.
It is called each time the user press the "Enter" key.

| Param | Type               | Description                                     |
| ----- | ------------------ | ----------------------------------------------- |
| event | <code>Event</code> | The event triggered when press the "Enter" key. |

</details>

<details><summary><a href="../../client/src/handlers/new-description.js" id="clientsrchandlersnew-descriptionjs">../client/src/handlers/new-description.js</a></summary>

<a name="newDescription"></a>

## newDescription

Entry point: user interaction. To edit a list item description.
It is called each time the user clicks the "edit" icon.

| Param | Type               | Description                                               |
| ----- | ------------------ | --------------------------------------------------------- |
| event | <code>Event</code> | The event triggered when the user clicks the "edit" icon. |

</details>

<details><summary><a href="../../client/src/handlers/remove-item.js" id="clientsrchandlersremove-itemjs">../client/src/handlers/remove-item.js</a></summary>

## Constants

<dl>
<dt><a href="#removeListHandler">removeListHandler</a></dt>
<dd><p>Entry point: user interaction. To remove a specific list.
It is called each time the user clicks the &quot;trash can&quot; img.</p>
</dd>
<dt><a href="#removeAllListHandler">removeAllListHandler</a></dt>
<dd><p>Entry point: user interaction. To remove the entire list.
It is called each time the user clicks the &quot;trash can&quot; img.</p>
</dd>
</dl>

<a name="removeListHandler"></a>

## removeListHandler

Entry point: user interaction. To remove a specific list.
It is called each time the user clicks the "trash can" img.

| Param | Type               | Description                                                 |
| ----- | ------------------ | ----------------------------------------------------------- |
| event | <code>Event</code> | The event triggered when the user clicks the "delete" icon. |

<a name="removeAllListHandler"></a>

## removeAllListHandler

Entry point: user interaction. To remove the entire list.
It is called each time the user clicks the "trash can" img.

| Param | Type               | Description                                                   |
| ----- | ------------------ | ------------------------------------------------------------- |
| event | <code>Event</code> | The event triggered when the user clicks the "trash can" img. |

</details>

<details><summary><a href="../../client/src/handlers/sort-list.js" id="clientsrchandlerssort-listjs">../client/src/handlers/sort-list.js</a></summary>

</details>

---

## /init

<details><summary><a href="../../client/src/init/index.js" id="clientsrcinitindexjs">../client/src/init/index.js</a></summary>

</details>

---

## /listeners

<details><summary><a href="../../client/src/listeners/edit-description.js" id="clientsrclistenersedit-descriptionjs">../client/src/listeners/edit-description.js</a></summary>

</details>

<details><summary><a href="../../client/src/listeners/help-section.js" id="clientsrclistenershelp-sectionjs">../client/src/listeners/help-section.js</a></summary>

</details>

<details><summary><a href="../../client/src/listeners/input-items.js" id="clientsrclistenersinput-itemsjs">../client/src/listeners/input-items.js</a></summary>

</details>

<details><summary><a href="../../client/src/listeners/remove-list.js" id="clientsrclistenersremove-listjs">../client/src/listeners/remove-list.js</a></summary>

</details>

<details><summary><a href="../../client/src/listeners/sort-list.js" id="clientsrclistenerssort-listjs">../client/src/listeners/sort-list.js</a></summary>

</details>

---

## /logic

<details><summary><a href="../../client/src/logic/table-sorter.js" id="clientsrclogictable-sorterjs">../client/src/logic/table-sorter.js</a></summary>

<a name="tableSorter"></a>

## tableSorter ⇒ <code>Array.&lt;string&gt;</code>

Sorts an array of strings in different ways.
It does not modify the argument (no side-effects).

**Returns**: <code>Array.&lt;string&gt;</code> - A new sorted array containing the same strings as toSort.

| Param      | Type                              | Default                                | Description                                                                                                                                                                                                                                                                                                 |
| ---------- | --------------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [toSort]   | <code>Array.&lt;string&gt;</code> | <code>[]</code>                        | The array of strings to sort.                                                                                                                                                                                                                                                                               |
| [sortType] | <code>string</code>               | <code>&quot;&#x27;-&#x27;&quot;</code> | How to sort the strings, 6 options. - old: from oldest to newest. - new: from newest to oldest. - short: from shortest to longest. - long: from longest to shortest. - a: alphabetical order. - z: reverse alphabetical order. If the sortType is not one of these 6 options, a copy of toSort is returned. |

**Example**

```js
// [Monday, Tuesday, Wednesday, Thursday], 'short' --> [Monday, Tuesday, Thursday, Wednesday]
```

**Example**

```js
// [Monday, Tuesday, Wednesday, Thursday], 'z' --> [Wednesday, Tuesday, Thursday, Monday]
```

</details>

---

---

# /styles

---

<details><summary><a href="../../client/data.js" id="clientdatajs">../client/data.js</a></summary>

<a name="data"></a>

## data

**Properties**

| Name   | Type                | Description                                                                      |
| ------ | ------------------- | -------------------------------------------------------------------------------- |
| keys   | <code>string</code> | A key is assigned for every list item the user inputs and displayed to the user. |
| values | <code>string</code> | A description inputted for each list item by the user and displayed.             |

</details>

<!-- END DOCS -->
