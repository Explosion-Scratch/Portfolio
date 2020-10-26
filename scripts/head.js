function insertcss(css) {
  var output = document.createElement("LINK");
  output.setAttribute("rel", "stylesheet");
  output.setAttribute("href", css);
  document.getElementsByTagName("HEAD")[0].appendChild(output);
}
window.onload = function () {
  insertcss("/styles/main.css");
};
