import { renderTable } from '../components/render-table.js';
import { data } from '../../data.js';

/* --- import listener files so they can attach to the DOM --- */

import '../listeners/input-items.js';
import '../listeners/remove-list.js';
import '../listeners/edit-description.js';
import '../listeners/help-section.js';
import '../listeners/sort-list.js';
// render list table

const newTable = renderTable(Object.keys(data), Object.values(data));

const listContainer = document.getElementById('display');
listContainer.innerHTML = '';
listContainer.appendChild(newTable);
