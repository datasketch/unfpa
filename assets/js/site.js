const toggleButton = document.getElementById('toggle-button');
const menuLinks = document.getElementById('menu-links');

toggleButton.addEventListener('click', function () {
  menuLinks.classList.toggle('flex')
  menuLinks.classList.toggle('hidden')
});
