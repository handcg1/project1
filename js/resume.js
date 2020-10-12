
var elements = document.getElementsByClassName("main-list-item");

var myFunction = function() {
    children = this.children;

    if (children[3].style.display === "block") {
        children[3].style.display = "none";
    } else {
        children[3].style.display = "block";
    }
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}