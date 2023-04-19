let users = [];

function getUsersFromLocalStorage() {
  const usersJson = localStorage.getItem('users');
  if (usersJson !== null) {
    users = JSON.parse(usersJson);
  }
}

function saveUsersToLocalStorage() {
  localStorage.setItem('users', JSON.stringify(users));
}

function renderUsers() {
  const usersList = document.querySelector('#users');
  usersList.innerHTML = '';

  users.forEach(function(user) {
    const li = document.createElement('li');
    li.textContent = user.name;

    const p = document.createElement('p');
    p.textContent = user.email;

    li.appendChild(p);
    usersList.appendChild(li);
  });
}

const newUserForm = document.querySelector('#new-user-form');
const userNameInput = document.querySelector('#name');
const userEmailInput = document.querySelector('#email');

getUsersFromLocalStorage();

renderUsers();

newUserForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const userName = userNameInput.value;
  const userEmail = userEmailInput.value;

  const user = { name: userName, email: userEmail };

  users.push(user);

  saveUsersToLocalStorage();

  userNameInput.value = '';
  userEmailInput.value = '';

  renderUsers();
});
