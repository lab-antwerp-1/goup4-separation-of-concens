import { data } from '../../data.js';
import {removeItemFromArray} from'../logic/remove-item.js';
/**
 * Entry point: user interaction. To remove a specific item from the list.
 * It is called each time the user clicks the item li.
 * 
 * @param {Event} event - The event triggered when the user clicks the item li.
 */

export const removeItemHandler = (event) => {
  // debugger;

  /* Not good! The handler needs to "know" how you wrote your component. I suppose someone in the future will build component like example below.
    <div id="m-list-container">
      <div class="s-list-container">
        <h3 class="title">shopping list</h3>
        <i class="fas delete"></i>
        <ul><li>item1</li><li>item2</li</ul>
      </div>
      <div class="s-list-container">
          <h3 class="title">adrass list</h3>
          <i class="fas delete"></i>
          <ul><li>item1</li><li>item2</li</ul>
      </div>
</div>
*/
  // check the event target
  if (event.target.nodeName !== 'LI') {
    return;
  }
  // process user input
  const title = event.target.parentElement.parentElement.firstChild.textContent;
  const toRemove = event.target.innerHTML;

  // update state
  data[`${title}`] = removeItemFromArray(toRemove, data[`${title}`]);
  // console.log(data);
};

/**
 * Entry point: user interaction. To remove a specific list.
 * It is called each time the user clicks the "delete" icon.
 *
 * @param {Event} event - The event triggered when the user clicks the "delete" icon.
 */
export const removeListHandler = (event) => {
  // debugger;

  /* Not good!  The handler needs to "know" how you wrote your component. I suppose someone in the future will build component like example below.
    <div id="m-list-container">
      <div class="s-list-container">
        <h3 class="title">shopping list</h3>
        <i class="fas delete"></i>
        <ul><li>item1</li><li>item2</li</ul>
      </div>
      <div class="s-list-container">
          <h3 class="title">adrass list</h3>
          <i class="fas delete"></i>
          <ul><li>item1</li><li>item2</li</ul>
      </div>
</div>
*/
  // check the event target
  if (event.target.nodeName !== 'I') {
    // I supposed there is a "delete" icon in i tag.
    return;
  }

  // process user input
  const title = event.target.parentElement.firstChild.textContent;

  // update state
  delete data[`${title}`];
  // console.log(data);
};
