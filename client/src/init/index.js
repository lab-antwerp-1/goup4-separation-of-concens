/* --- import all listener files so they can attach to the DOM --- */
import { renderTable } from '../components/render-table.js';
import { data } from '../../data.js';
import '../listeners/input-items.js';
import '../listeners/remove-list.js';
import '../listeners/edit-description.js';

// render the initial list
const newTable = renderTable(Object.keys(data));

const listContainer = document.getElementById('display');
listContainer.innerHTML = '';
listContainer.appendChild(newTable);
