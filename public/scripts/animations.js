function myFunction(x) {
  x.classList.toggle("change");
}
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}
function moveMaps() {
  document.getElementById("maps-container").style.height = "0"
}
function moveMapsBack() {
  document.getElementById("maps-container").style.height = "auto"
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function openPinsDisplay() {
  document.getElementById("pins-container").style.width = "400px";
}

function closePinsDisplay() {
  document.getElementById("pins-container").style.width = "0";
}

function openNav2() {
  document.getElementById("mySidenav2").style.width = "300px";
}

function closeNav2() {
  document.getElementById("mySidenav2").style.width = "0";
}

const closeOverlays = function () {
  moveMaps();
  closeNav();
  closePinsDisplay();
  closeNav2();
}
