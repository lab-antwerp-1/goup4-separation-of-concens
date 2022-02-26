import { editDescription } from './edit-description.js';

export const newDescription = (event) => {
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

  if (event.target.id !== `edit-${index}`) {
    return;
  }

  document
    .getElementById('display')
    .removeEventListener('click', newDescription);
  const warnings = document.getElementById('warnings');
  warnings.innerHTML = 'please enter a new description';
  const newDescriptionInput = document.createElement('input');
  // console.log(newDescriptionInput.innerText);
  newDescriptionInput.id = `new-input-${index}`;
  // console.log(newDescriptionInput.id);
  newDescriptionInput.placeholder = 'new description';
  const descriptionRow = document.getElementById(`description-row-${index}`);
  // console.log(descriptionRow.id);
  descriptionRow.appendChild(newDescriptionInput);
  document.getElementById('display').addEventListener('click', editDescription);
};

/*
  const warnings = document.getElementById('warnings');
  warnings.innerHTML = 'please enter a new description';
  const newDescriptionInput = document.createElement('input');
  newDescriptionInput.id = 'new-input';
  newDescriptionInput.placeholder = 'new description';
  warnings.appendChild(newDescriptionInput);
*/
// const index = preIndex / 2;
// console.log(table.id, eventTr.id, index);

// const indexOfTarget = Array.from(event.target.parentNode.children).indexOf(
//   event.target,
// );
/* 
  const indexOfItem = indexOfTarget + 1;
  const itemTitle =
    event.target.parentElement.children[indexOfItem].textContent;
*/
