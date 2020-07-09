const entryForm = document.getElementById('entry-form');
const entriesSection = document.querySelector('.entries-section');
const entryTextBox = document.querySelector('.entry-textbox');
const entryNav = document.querySelector('.entries-nav');
let count = 1;

function addEntryToDom(event) {
  event.preventDefault();
  const entryDiv = document.createElement('span');
  entryDiv.className = 'single-entry';
  entryDiv.style.display = 'none';
  entryDiv.innerText = entryTextBox.value;

  const displayEntryButton = document.createElement('button');
  displayEntryButton.className = 'display-entry-button';
  displayEntryButton.innerText = count;
  displayEntryButton.addEventListener('click', function () {
    const allEntries = document.querySelectorAll('.single-entry');
    for (let index = 0; index < allEntries.length; index++) {
      allEntries[index].style.display = 'none';
    }
    entryDiv.style.display = 'block';
  })

  count++

  entryNav.appendChild(entryDiv);
  entryNav.appendChild(displayEntryButton);
  entriesSection.appendChild(entryNav);
  entryTextBox.value = '';
}
entryForm.addEventListener('submit', addEntryToDom);
