export const showSort = (event) => {
  if (event.target.id !== 'sort') {
    return;
  }
  console.log('goop', event.target.id);
  /*
  const isId = document.getElementById('intro');
  const instructions = document.createElement('p');
  instructions.id = 'instructions';
  instructions.classList.add('instructions');

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

  if (isId.children.length === 1) {
    isId.appendChild(instructions);
    return;
  }

  if (isId.children.length === 2) {
    isId.removeChild(isId.children[1]);
  }
  */
};
