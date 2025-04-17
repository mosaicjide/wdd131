document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const userData = {
    name: document.getElementById('name').value,
    age: document.getElementById('age').value,
    email: document.getElementById('email').value,
    category: document.getElementById('category').value
  };

  localStorage.setItem('registration', JSON.stringify(userData));

  alert(`Thank you for registering, ${userData.name}!`);
  this.reset();
});
