
//NAVBAR
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // User is scrolling up
    document.querySelector("nav").classList.remove("navbar-hidden");
  } else {
    // User is scrolling down
    document.querySelector("nav").classList.add("navbar-hidden");
  }

  prevScrollPos = currentScrollPos;
}