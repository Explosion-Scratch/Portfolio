window.onload = function () {
  if (window.localStorage.getItem("dark_mode") === "true") {
    darkMode();
  }
};

function darkMode() {
  var element = document.querySelector("*");
  var dark = element.classList.toggle("dark-mode");
  window.localStorage.setItem("dark_mode", dark);
}

function round(number, nearest) {
  var output = number / nearest;
  output = Math.round(output);
  output = output * nearest;
  return output;
}
