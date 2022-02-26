import { editDescription } from '../handlers/edit-description.js';
import { newDescription } from '../handlers/new-description.js';

document.getElementById('display').addEventListener('click', newDescription);
document.getElementById('display').addEventListener('click', editDescription);
