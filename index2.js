let items = [];

function getItemsFromLocalStorage() {
  const itemsJson = localStorage.getItem('items');
  if (itemsJson !== null) {
    items = JSON.parse(itemsJson);
  }
}

function saveItemsToLocalStorage() {
  localStorage.setItem('items', JSON.stringify(items));
}

function renderItems() {
  itemsList.innerHTML = '';
  
  const filteredItems = items.filter(function(item) {
    return (
      item.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      item.mobile_number.toLowerCase().includes(searchInput.value.toLowerCase())
    );
  });

  filteredItems.forEach(function(item) {
    const li = document.createElement('li');
    li.textContent = item.name;

    const p = document.createElement('p');
    p.textContent = item.mobile_number;

    li.appendChild(p);
    itemsList.appendChild(li);
  });
}

const searchInput = document.querySelector('#search');
const itemsList = document.querySelector('#items');
const newItemForm = document.querySelector('#new-item-form');
const itemNameInput = document.querySelector('#name');
const itemmobile_numberInput = document.querySelector('#mobile_number');

getItemsFromLocalStorage();

renderItems();

searchInput.addEventListener('input', renderItems);

newItemForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const itemName = itemNameInput.value;
  const itemmobile_number = itemmobile_numberInput.value;

  items.push({ name: itemName, mobile_number: itemmobile_number });
  
  saveItemsToLocalStorage();
  
  itemNameInput.value = '';
  itemmobile_numberInput.value = '';

  renderItems();
});