const entryForm = document.getElementById('entry-form');
const entryTextBox = document.querySelector('.entry-textbox');
const entryNav = document.querySelector('.entries-nav');
const entry = document.querySelector('.entries');
const buttonClear = document.querySelector('.button-clear');

let count = 1;

function addEntryToDom(event) {
  event.preventDefault();
  const entryTextBoxValue = entryTextBox.value + '\n' + new Date().toLocaleString();
  const entryDiv = `
  <span class="single-entry">${entryTextBoxValue}</span>
  <button class="display-entry-button">${count}</button>
  `

  entryNav.innerHTML += entryDiv;
  entryTextBox.value = '';
  
  count++

  const displayEntryButtons = document.querySelectorAll('.display-entry-button');
  
  displayEntryButtons.forEach( displayEntryButton => {
    displayEntryButton.addEventListener('click', function () {
      console.log("ok");
      const allEntries = document.querySelectorAll('.single-entry');
      for (let index = 0; index < allEntries.length; index++) {
        allEntries[index].style.display = 'none';
      }
    });
  });
}

entryForm.addEventListener('submit', addEntryToDom);

buttonClear.addEventListener('click', () => {
  entryTextBox.value = '';
})
