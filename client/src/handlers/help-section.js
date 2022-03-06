/**
 * Entry point: user interaction. To edit a list item description.
 * It is called each time the user clicks the "help/instructions" icon on footer.
 *
 * @param {Event} event - The event triggered when the user clicks the "help/instructions" icon.
 *
 */

export const helpSection = (event) => {
  // assure event is recorded for correct element
  if (event.target.id !== 'help') {
    return;
  }

  // declare and assign html elements for instructions paragraph
  const isId = document.getElementById('intro');
  const instructions = document.createElement('p');
  instructions.id = 'instructions';
  instructions.classList.add('instructions');
  // instructions element text
  instructions.innerHTML = `Welcome to list maker!<br />Our page will help you stay on top of your
lists.<br />
To get started simply type your first item in the box below and a new
list will be created automatically.<br /><br />Click the 'add' button
to add items to your list and the 'remove' button to edit items
out.<br />Click the 'reset' button to clear your list and start
over.<br /><br />In order to add descriptions to your items click the
'description' button.<br />You can also check off items by using the
check-boxes.<br /><br />Once your list is complete you can choose how
you would like to see the items displayed with the 'sort list'
drop-box.<br />You can also stylize your items using the 'stylize'
button.<br /><br />Enjoy making your lists and check back for new
features in the future!`;

  // create conditions for revealing/hiding instructions text
  if (isId.children.length === 1) {
    isId.appendChild(instructions);
    return;
  }

  if (isId.children.length === 2) {
    isId.removeChild(isId.children[1]);
  }
};
