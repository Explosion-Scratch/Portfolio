var toggle = document.getElementById("toggle");

window.onload = function () {
  if (window.localStorage.getItem("dark_mode") === "true") {
    darkMode();
  } else {
    toggle.checked = false;
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
