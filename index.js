const entryForm = document.getElementById('entry-form');
const entries = document.querySelector('.entries');
const entryTextBox = document.querySelector('.entry-textbox');
const entriesNav = document.querySelector('.entries-nav');
const buttonClear = document.querySelector('.button-clear');

let count = 1;

JSON.parse(localStorage.getItem('dataStore'))

function displayEntry(element) {
  const allEntries = document.querySelectorAll('.single-entry');
  allEntries.forEach(allEntry => {
    allEntry.style.display = 'none';
  });
  const currentSpanId = element.innerText;
  const entryDiv = document.getElementById(currentSpanId);
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

  const indexValuePair = {
    index: count,
    entryTextBoxValue: entryTextBoxValue
  };
  
  let dataStore = JSON.parse(localStorage.getItem('dataStore')) || [];
  
  dataStore.push(indexValuePair);
  localStorage.setItem('dataStore', JSON.stringify(dataStore));

  localStorage.setItem('index', count);
  count++
}

entryForm.addEventListener('submit', addEntryToDom);

buttonClear.addEventListener('click', () => {
  entryTextBox.value = '';
})
