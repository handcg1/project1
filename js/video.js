const slides = document.querySelectorAll('.myslides');
const dots = document.querySelectorAll('.dot');

dots[0].classList.add('active');

let i = 0;

function forward() {
  if (i < slides.length - 1) {
    slides[i].classList.remove('current');
    slides[i].classList.add('past');
    dots[i].classList.remove('active');
    i += 1;
    slides[i].classList.add('current');
    dots[i].classList.add('active');

  }
}

function backward() {
 
  if (i > 0) {
    slides[i].classList.remove('current');
    dots[i].classList.remove('active');
    i -= 1;
    dots[i].classList.add('active');
    slides[i].classList.remove('past');
    slides[i].classList.add('current');
  } 

}

document.getElementById('left').addEventListener('click', backward);
document.getElementById('right').addEventListener('click', forward);
