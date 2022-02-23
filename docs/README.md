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
    - [render-list.js](#clientsrccomponentsrender-listjs)
  - handlers
    - [input-items.js](#clientsrchandlersinput-itemsjs)
    - [remove-item.js](#clientsrchandlersremove-itemjs)
  - init
    - [index.js](#clientsrcinitindexjs)
  - listeners
    - [input-items.js](#clientsrclistenersinput-itemsjs)
    - [remove-list.js](#clientsrclistenersremove-listjs)
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

<details><summary><a href="../../client/src/components/render-list.js" id="clientsrccomponentsrender-listjs">../client/src/components/render-list.js</a></summary>

</details>

---

## /handlers

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

<details><summary><a href="../../client/src/handlers/remove-item.js" id="clientsrchandlersremove-itemjs">../client/src/handlers/remove-item.js</a></summary>

<a name="removeListHandler"></a>

## removeListHandler

Entry point: user interaction. To remove a specific list.
It is called each time the user clicks the "delete"icon.

| Param | Type               | Description                                                 |
| ----- | ------------------ | ----------------------------------------------------------- |
| event | <code>Event</code> | The event triggered when the user clicks the "delete" icon. |

</details>

---

## /init

<details><summary><a href="../../client/src/init/index.js" id="clientsrcinitindexjs">../client/src/init/index.js</a></summary>

</details>

---

## /listeners

<details><summary><a href="../../client/src/listeners/input-items.js" id="clientsrclistenersinput-itemsjs">../client/src/listeners/input-items.js</a></summary>

</details>

<details><summary><a href="../../client/src/listeners/remove-list.js" id="clientsrclistenersremove-listjs">../client/src/listeners/remove-list.js</a></summary>

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
