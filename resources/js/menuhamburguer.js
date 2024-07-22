document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const ulHamburguer = document.querySelector('.ul-hamburguer');

  hamburgerMenu.addEventListener('click', () => {
    ulHamburguer.style.display = ulHamburguer.style.display === 'block' ? 'none' : 'block';
  });
});
