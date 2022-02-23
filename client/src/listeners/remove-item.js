/* import all the handlers */
import {
  removeItemHandler,
  removeListHandler,
} from '../handlers/remove-item.js';

// I supposed there is a div with the id name "m-list-container" as the container for multiple list, when someone render component in the future.
document
  .getElementById('m-list-container')
  .addEventListener('click', removeItemHandler);

document
  .getElementById('m-list-container')
  .addEventListener('click', removeListHandler);
