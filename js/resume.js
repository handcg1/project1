// var coll = document.getElementsByClassName("main-list-item");


//const coll = document.querySelectorAll(".main-list-item");


// for(i = 0; i < coll.length; i++) {
//     coll[i].addEventListener('click', () =>  {
//         alert("hi");
//         // coll[i].body.style.backgroundColor = "red";
// });



// for (i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function() {
//       this.classList.toggle("active");
//       var content = this.;
//       if (content.style.display === "block") {
//         content.style.display = "none";
//       } else {
//         content.style.display = "block";
//       }
//     });
//   }

// var x = document.getElementsByClassName("main-list-item");
// var i;
// for (i = 0; i < x.length; i++) {

//   x[i].addEventListener('click',() => {
//     x[i].style.backgroundColor = "red";
//   });
  
// }

var elements = document.getElementsByClassName("main-list-item");

var myFunction = function() {
   // var attribute = this.getAttribute("data-myattribute");
    // alert("hi");
    children = this.children;

    if (children[3].style.display === "block") {
        children[3].style.display = "none";
    } else {
        children[3].style.display = "block";
    }
    // children[3].style.display = "block";
    // event.stopPropagation();
    // children[3].classList.toggle('active');

};

// document.addEventListener('click', () => {
//     children = this.children;
//     children[3].style.display = "none";
// }); 

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}