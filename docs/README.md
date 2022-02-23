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
  - handlers
    - [input-items.js](#clientsrchandlersinput-itemsjs)
  - init
    - [index.js](#clientsrcinitindexjs)
  - listeners
    - [input-items.js](#clientsrclistenersinput-itemsjs)
  - logic
    - [array-list.js](#clientsrclogicarray-listjs)
- styles
- [data.js](#clientdatajs)

---

<!-- END TOC -->

<!-- BEGIN DOCS -->

# /public

---

# /src

## /components

---

## /handlers

<details><summary><a href="../../client/src/handlers/input-items.js" id="clientsrchandlersinput-itemsjs">../client/src/handlers/input-items.js</a></summary>

<a name="getInputHandler"></a>

## getInputHandler

Entry point for users adding title and item to the list.
It is called each time the user clicks the "add" button.

| Param | Type               | Description                                          |
| ----- | ------------------ | ---------------------------------------------------- |
| event | <code>Event</code> | The event triggered when the user clicks the button. |

</details>

---

## /init

<details><summary><a href="../../client/src/init/index.js" id="clientsrcinitindexjs">../client/src/init/index.js</a></summary>

</details>

---

## /listeners

<details><summary><a href="../../client/src/listeners/input-items.js" id="clientsrclistenersinput-itemsjs">../client/src/listeners/input-items.js</a></summary>

</details>

---

## /logic

<details><summary><a href="../../client/src/logic/array-list.js" id="clientsrclogicarray-listjs">../client/src/logic/array-list.js</a></summary>

<a name="arrayOfListItems"></a>

## arrayOfListItems ⇒ <code>Array</code>

Convert user input list items to an array of list items.

**Returns**: <code>Array</code> - - An array of list.

| Param       | Type                | Default                                 | Description                                    |
| ----------- | ------------------- | --------------------------------------- | ---------------------------------------------- |
| [listItems] | <code>string</code> | <code>&quot;\&quot;\&quot;&quot;</code> | A string of list that user are going to input. |

</details>

---

---

# /styles

---

<details><summary><a href="../../client/data.js" id="clientdatajs">../client/data.js</a></summary>

</details>

<!-- END DOCS -->
