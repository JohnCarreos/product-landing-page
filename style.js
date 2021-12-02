
var welcome = document.getElementById("welcome");
welcome.innerHTML = "About Us";

document.getElementById("change-color").addEventListener("click", changeColor);

function changeColor() {
    document.getElementById('about-us').style.backgroundColor = '#2D4739';
    document.getElementById('videos').style.backgroundColor = '#2D4739';

}

// function changeColor() {
//     var background = document.getElementsByClassName("background-color");
//     background.classList.toggle("background-color");
// }

