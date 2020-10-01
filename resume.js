const arrow = document.getElementById("arrow");
const slide = document.getElementById("card");
const arrow2 = document.getElementById("arrow2");
const slide2 = document.getElementById("card2");

slide.classList.add('hidden');

arrow.addEventListener('click', () => {
    if(slide.classList.contains('hidden')) {
        slide.classList.remove('hidden');
        slide.classList.add('visible');
        arrow.style.transform = "rotate(180deg) scale(1.5)";
    } else {
        slide.classList.remove('visible');
        slide.classList.add('hidden');
        arrow.style.transform = "rotate(360deg) scale(1.5)";
    }  
});

arrow2.addEventListener('click', () => {
    if(slide.classList.contains('hidden')) {
        slide2.classList.remove('hidden');
        slide2.classList.add('visible');
        arrow2.style.transform = "rotate(180deg) scale(1.5)";
    } else {
        slide2.classList.remove('visible');
        slide2.classList.add('hidden');
        arrow2.style.transform = "rotate(360deg) scale(1.5)";
    }  
});
