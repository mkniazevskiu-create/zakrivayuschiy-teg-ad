const memoryDialog = document.querySelector('#memory-dialog');
const saveButton = document.querySelector('.save-button');
const dialogButton = document.querySelector('.dialog__button');

saveButton.addEventListener('click', (event) => {
  event.preventDefault();

  if (!memoryDialog.open) {
    memoryDialog.showModal();
  }
});

dialogButton.addEventListener('click', (event) => {
  event.preventDefault();

  memoryDialog.close();
});