/* import all the handlers */
import '../handlers/remove-item.js';

// I suppose there is a div with the id name "m-list-container, when someone render component"
document
  .getElementById('m-list-container')
  .addEventListener('click', removeItemHandler);

document
  .getElementById('m-list-container')
  .addEventListener('click', removeListHandler);
