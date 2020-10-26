var toggle = document.getElementById("toggle");

window.onload = function () {
  if (window.localStorage.getItem("dark_mode") === "true") {
    darkMode();
  }
};

function darkMode() {
  var element = document.querySelector("*");
  var dark = element.classList.toggle("dark-mode");
  window.localStorage.setItem("dark_mode", dark);
  if (dark === true) {
    toggle.checked = true;
  } else {
    toggle.checked = false;
  }
}

function round(number, nearest) {
  var output = number / nearest;
  output = Math.round(output);
  output = output * nearest;
  return output;
}

window.onscroll = function () {
  scroll();
};

function scroll() {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  var totalScroll =
    document.body.scrollHeight - document.documentElement.clientHeight;
  document.getElementById("scroll").style.width =
    (scrollTop / totalScroll) * 100 + "%";
}

function insertcss(css) {
  var output = document.createElement("LINK");
  output.setAttribute("rel", "stylesheet");
  output.setAttribute("href", css);
  document.getElementsByTagName("HEAD")[0].appendChild(output);
}
function insertjs(js) {
  var output = document.createElement("SCRIPT");
  output.setAttribute("src", js);
  document.getElementsByTagName("HEAD")[0].appendChild(output);
}
window.onload = function () {
  insertcss("/styles/main.css");
  insertjs("https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js");
  insertcss("/styles/images.css");
  insertjs("/scripts/images.js");
  insertcss("/styles/tooltips.css");
  insertjs("https://code.iconify.design/1/1.0.7/iconify.min.js");
};
