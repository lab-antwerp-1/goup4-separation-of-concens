import { editDescription } from './edit-description.js';

export const newDescription = (event) => {
  if (event.target.id !== 'edit') {
    return;
  }

  /*  
  const indexOfTarget = Array.from(event.target.parentNode.children).indexOf(
    event.target,
  );
  const indexOfItem = indexOfTarget - 1;
  const itemTitle =
    event.target.parentElement.children[indexOfItem].textContent;
*/
  document
    .getElementById('display')
    .removeEventListener('click', newDescription);
  const warnings = document.getElementById('warnings');
  warnings.innerHTML = 'please enter a new description';
  const newDescriptionInput = document.createElement('input');
  newDescriptionInput.id = 'new-input';
  newDescriptionInput.placeholder = 'new description';
  warnings.appendChild(newDescriptionInput);
  document.getElementById('display').addEventListener('click', editDescription);
};
