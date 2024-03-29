document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('#btn-click-me');

  button.addEventListener('click', function() {
    alert('Button clicked!');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.card'); 

  menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      const description = item.querySelector('.description'); 
      if (description) {
        description.classList.toggle('show');
      }
    });
  });
});