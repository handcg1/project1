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





// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//     showDivs(slideIndex += n);
// }

// function showDivs(n) {
//     var i;
//     var x = document.getElementsByClassName("myslides");
//     if (n > x.length) {
//         slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = x.length;
//     }

//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }

//     x[slideIndex-1].style.display = "block";
//     x[slideIndex-1]
// }