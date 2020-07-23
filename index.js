const entryForm = document.getElementById('entry-form');
const entries = document.querySelector('.entries');
const entryTextBox = document.querySelector('.entry-textbox');
const entriesNav = document.querySelector('.entries-nav');
const buttonClear = document.querySelector('.button-clear');

let count = 1;

const displayEntry = function(element) {
  const allEntries = document.querySelectorAll('.single-entry');
    for (let index = 0; index < allEntries.length; index++) {
        allEntries[index].style.display = 'none';
    }
  const entryDiv = document.getElementById(element.innerText);
  entryDiv.style.display = 'block';
}

function addEntryToDom(event) {
  event.preventDefault();
  const entryTextBoxValue = entryTextBox.value + '\n' + new Date().toLocaleString();
  
  const entryDiv = `
    <div id="${count}" class="single-entry">
      <span>${entryTextBoxValue}</span>
    </div>
  `
  entries.innerHTML += entryDiv;

  const displayEntryButton = `
    <button class="display-entry-button" onclick='displayEntry(this)'>
      ${count}
    </button>
  `
  entriesNav.innerHTML += displayEntryButton;
  
  entryTextBox.value = '';
  count++
}

entryForm.addEventListener('submit', addEntryToDom);

buttonClear.addEventListener('click', () => {
  entryTextBox.value = '';
})
