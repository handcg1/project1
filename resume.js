const arrow = document.getElementById("arrow");
const slide = document.getElementById("card");
const arrow2 = document.getElementById("arrow2");

slide.classList.add('hidden');

arrow.addEventListener('click', () => {
    slide.classList.remove('hidden');
    slide.classList.add('visible');
});

arrow2.addEventListener('click', () => {
    slide.classList.remove('visible');
    slide.classList.add('hidden');
});
