import { showSort, tableSort } from '../handlers/sort-list.js';

document.getElementById('sort').addEventListener('click', showSort);
document.getElementById('display').addEventListener('change', tableSort);
