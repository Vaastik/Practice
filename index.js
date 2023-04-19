let items = [];

// select DOM elements
const searchInput = document.querySelector('#search');
const itemsList = document.querySelector('#items');
const newItemForm = document.querySelector('#new-item-form');
const itemNameInput = document.querySelector('#name');
const itemDescriptionInput = document.querySelector('#description');

// function to render items list
function renderItems() {
  // clear previous content
  itemsList.innerHTML = '';

  // filter items based on search input value
  const filteredItems = items.filter(function(item) {
    return (
      item.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      item.description.toLowerCase().includes(searchInput.value.toLowerCase())
    );
  });

  // create new list items and append to items list
  filteredItems.forEach(function(item) {
    const li = document.createElement('li');
    li.textContent = item.name;
    const p = document.createElement('p');
    p.textContent = item.description;
    li.appendChild(p);
    itemsList.appendChild(li);
  });
}

// add event listeners
searchInput.addEventListener('input', renderItems);

newItemForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const itemName = itemNameInput.value;
  const itemDescription = itemDescriptionInput.value;

  // add new item to items array
  items.push({ name: itemName, description: itemDescription });

  // clear input values
  itemNameInput.value = '';
  itemDescriptionInput.value = '';

  // re-render items list
  renderItems();
});

// initial render
renderItems();