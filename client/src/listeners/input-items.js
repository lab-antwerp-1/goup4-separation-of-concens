import {
  getInputHandler,
  getInputWithEnterHandler,
} from '../handlers/input-items.js';

document.getElementById('add').addEventListener('click', getInputHandler);
document
  .getElementById('input-area')
  .addEventListener('keydown', getInputWithEnterHandler);
