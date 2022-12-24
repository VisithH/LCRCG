let header = document.getElementById("myNav");
let btns = header.getElementsByClassName("nav-li");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[1].className = current[1].className.replace(" active"," ");
  this.className += " active";
  });
}

window.onscroll = function () {
  sticky();
};

var navbar = document.getElementById("navigation");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("sticky", window.scrollY > 0);
  navbar.classList.toggle("nonsticky", window.scrollY > 50);
});
var sticky = navbar.offsetTop;

function sticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    console.log("sticky");
  } else {
    navbar.classList.remove("sticky");
    console.log("non sticky");
  }
}

let valueDisplays = document.querySelectorAll(".num");
let interval = 2;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $("nav ul").toggleClass("showing");
  });
});

ScrollReveal().reveal('.team');