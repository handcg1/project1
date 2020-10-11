const nav = document.getElementById('nav-links');
const menu = document.getElementById('hamburger-btn');

menu.addEventListener ('click', () => {
    nav.classList.toggle('open');
    event.stopPropagation();
});

document.addEventListener('click', () => {
    nav.classList.remove('open');
}); 