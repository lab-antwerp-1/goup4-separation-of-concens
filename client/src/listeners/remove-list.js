import {
  removeListHandler,
  removeAllListHandler,
} from '../handlers/remove-item.js';

document.getElementById('display').addEventListener('click', removeListHandler);
document
  .getElementById('reset-list')
  .addEventListener('click', removeAllListHandler);
