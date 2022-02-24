/* --- import all listener files so they can attach to the DOM --- */
import '../listeners/input-items.js';
import { renderTable } from '../components/render-table.js';
import { data } from '../../data.js';
import '../listeners/remove-list.js';

// render the initial list
const newList = renderTable(Object.keys(data));

const listContainer = document.getElementById('display');
listContainer.innerHTML = '';
listContainer.appendChild(newList);
