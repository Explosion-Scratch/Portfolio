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
function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}
