const buttonElem = document.querySelector('button');
const inputElem = document.querySelector('input');
const listElem = document.querySelector('ul');

function addGoal() {
    const enteredValue = inputElem.value;
    const listItemElem = document.createElement('li');
    listItemElem.textContent = enteredValue;
    listElem.appendChild(listItemElem);
    inputElem.value = '';
}

buttonElem.addEventListener('click', addGoal)