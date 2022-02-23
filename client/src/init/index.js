/* --- import all listener files so they can attach to the DOM --- */
import '../listeners/input-items.js';
import { renderList } from '../components/render-list.js';
import { data } from '../../data.js';

// render the initial list
const newList = renderList(Object.keys(data));

const listContainer = document.getElementById('display');
listContainer.innerHTML = '';
listContainer.appendChild(newList);
