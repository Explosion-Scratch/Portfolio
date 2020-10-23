window.onload = function () {
  if (window.localStorage.getItem("dark_mode") === "true") {
    darkMode();
  } else if (window.localStorage.getItem("dark_mode") === "null") {
    darkMode();
  }
};

function darkMode() {
  var element = document.querySelector("*");
  var dark = element.classList.toggle("dark-mode");
  window.localStorage.setItem("dark_mode", dark);
}

function scroll() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop >= 820) {
    var element = document.querySelector("*");
    var dark = element.classList.add("dark-mode");
  } else {
    var element = document.querySelector("*");
    var dark = element.classList.remove("dark-mode");
  }
}
function round(number, nearest) {
  var output = number / nearest;
  output = Math.round(output);
  output = output * nearest;
  return output;
}
