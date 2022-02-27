import { data } from '../../data.js';
import { renderTable } from '../components/render-table.js';
import { newDescription } from './new-description.js';
/**
 * Entry point: user interaction. To edit a list item description.
 * It is called each time the user clicks the "edit" icon.
 *
 * @param {Event} event - The event triggered when the user clicks the "edit" icon.
 *
 */

export const editDescription = (event) => {
  // debugger;
  // check the event target

  /*
  console.log(event.target.parentElement.nextElementSibling.id);
  if (
    event.target.parentElement.parentElement.children[1].children.length !== 2
  ) {
    console.log('nope2');
    console.log(
      event.target.parentElement.parentElement.children[1].children.length,
    );
    return;
  }
  */
  const table = document.getElementById('display-table');
  const eventTr = event.target.parentElement.id;
  const indexFu = (par1, par2) => {
    let sum = 0;
    for (let i = 0; i < par1.children.length; i++) {
      if (par1.children[i].id === par2) {
        sum = i;
      }
    }
    return sum;
  };
  const index = (indexFu(table, eventTr) + 2) / 2;
  // process user input, and get component index.
  const indexOfTarget = Array.from(event.target.parentNode.children).indexOf(
    event.target,
  );
  const kid = document.getElementById(`description-row-${index}`);
  // console.log(kid.id, kid.children.length);
  if (event.target.id !== `edit-${index}` || kid.children.length !== 2) {
    return;
  }
  document
    .getElementById('display')
    .removeEventListener('click', editDescription);

  const indexOfItem = indexOfTarget - 1;
  const itemTitle =
    event.target.parentElement.children[indexOfItem].textContent;
  // console.log(indexOfTarget);

  // const index =
  //   event.target.parentElement.parentElement.children[indexOfItem].id;
  // console.log(index);

  const warnings = document.getElementById('warnings');
  const description = document.getElementById(`new-input-${index}`);
  const toRenderDescription = description.value;
  // console.log(description.innerText);
  // const descriptionTd = document.getElementById(`description-td-${index}`);
  // const descriptionRow = document.getElementById(`description-row-${index}`);
  // description.innerHTML = '';
  // const toRenderDescription = 'great';
  // update state

  data[itemTitle] = toRenderDescription;

  // update the UI
  const newTable = renderTable(Object.keys(data), Object.values(data));

  const listContainer = document.getElementById('display');
  listContainer.innerHTML = '';
  listContainer.appendChild(newTable);
  // descriptionRow.removeChild(description);
  warnings.innerHTML = '';
  document.getElementById('display').addEventListener('click', newDescription);
};

/*
works
const warnings = document.getElementById('warnings');
  const description = document.getElementById('new-input');
  const toRenderDescription = description.value;
 */

// <p contenteditable="true">This is an editable paragraph.</p>

/*
  const warnings = document.getElementById('warnings');
  warnings.innerText = '';
  warnings.innerText = 'Please enter new description';
*/
// const description = document.getElementById('description');
// const newDescription = description.value;

// work
// const newDescription = prompt('please enter new description');
