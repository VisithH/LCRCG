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
  myFunction();
};

var navbar = document.getElementById("navigation");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("sticky", window.scrollY > 0);
});
var sticky = navbar.offsetTop;

function myFunction() {
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

// // Scrolling Effect

// $(window).on("scroll", function () {
//   if ($(window).scrollTop()) {
//     $("nav").addClass("black");
//   } else {
//     $("nav").removeClass("black");
//   }
// });

// Scrolling Effect 

ScrollReveal().reveal('.team');

// Shaky Effect
// (function() {
//   // Init
//   var leoimg = document.getElementById("leoimg"),
//     inner = document.getElementById("inner");

//   // Mouse
//   var mouse = {
//     _x: 0,
//     _y: 0,
//     x: 0,
//     y: 0,
//     updatePosition: function(event) {
//       var e = event || window.event;
//       this.x = e.clientX - this._x;
//       this.y = (e.clientY - this._y) * -1;
//     },
//     setOrigin: function(e) {
//       this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
//       this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
//     },
//     show: function() {
//       return "(" + this.x + ", " + this.y + ")";
//     }
//   };

//   // Track the mouse position relative to the center of the leoimg.
//   mouse.setOrigin(leoimg);

//   //-----------------------------------------

//   var counter = 0;
//   var updateRate = 10;
//   var isTimeToUpdate = function() {
//     return counter++ % updateRate === 0;
//   };

//   //-----------------------------------------

//   var onMouseEnterHandler = function(event) {
//     update(event);
//   };

//   var onMouseLeaveHandler = function() {
//     inner.style = "";
//   };

//   var onMouseMoveHandler = function(event) {
//     if (isTimeToUpdate()) {
//       update(event);
//     }
//   };

//   //-----------------------------------------

//   var update = function(event) {
//     mouse.updatePosition(event);
//     updateTransformStyle(
//       (mouse.y / inner.offsetHeight / 2).toFixed(2),
//       (mouse.x / inner.offsetWidth / 2).toFixed(2)
//     );
//   };

//   var updateTransformStyle = function(x, y) {
//     var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
//     inner.style.transform = style;
//     inner.style.webkitTransform = style;
//     inner.style.mozTransform = style;
//     inner.style.msTransform = style;
//     inner.style.oTransform = style;
//   };

//   //-----------------------------------------

//   leoimg.onmouseenter = onMouseEnterHandler;
//   leoimg.onmouseleave = onMouseLeaveHandler;
//   leoimg.onmousemove = onMouseMoveHandler;
// })();