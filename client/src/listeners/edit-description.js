import { newDescription } from '../handlers/new-description.js';
import { editDescription } from '../handlers/edit-description.js';

document.getElementById('display').addEventListener('click', newDescription);

document.getElementById('display').addEventListener('click', editDescription);
document
  .getElementById('display')
  .removeEventListener('click', editDescription);
