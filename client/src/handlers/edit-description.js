import { data } from '../../data.js';
/**
 * Entry point: user interaction. To edit a list item description.
 * It is called each time the user clicks the "edit" icon.
 *
 * @param {Event} event - The event triggered when the user clicks the "edit" icon.
 *
 */

export const editDescription = (event) => {
  // debugger;
  // check the event target
  if (event.target.id !== 'edit') {
    return;
  }
  // process user input, and get component index.
  const indexOfTarget = Array.from(event.target.parentNode.children).indexOf(
    event.target,
  );
  const indexOfItem = indexOfTarget - 1;
  // get the specific title and description that user want to edit.
  const itemTitle =
    event.target.parentElement.children[indexOfItem].textContent;
  const descriptionContent = data[`${itemTitle}`];
  // print the title and description to input box and text area.
  // after edit, click add to add the edited list , and then click the bin icon to remove the old one.
  document.getElementById('input').value = itemTitle;
  document.getElementById('description').value = descriptionContent;
};
