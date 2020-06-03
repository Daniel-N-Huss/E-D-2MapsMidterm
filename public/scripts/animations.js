function myFunction(x) {
  x.classList.toggle("change");
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function moveMaps() {
  document.getElementById("maps-container").style.height = "0"
}
function moveMapsBack() {
  document.getElementById("maps-container").style.height = "700px"
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function openPinInfo() {
  document.getElementById("pins-display").style.width = "250px";
}

function closePinInfo() {
  document.getElementById("pins-display").style.width = "0";
}

