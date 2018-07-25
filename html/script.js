$(function() {
    var x = document.getElementsByClassName("header");
    obsah = x[0];
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
          obsah.style = "background-color: #10263C; transition: 0.5s; padding-top: 10px; padding-bottom:10px;";
        } else {
          obsah.style = "background: transparent; transition: 0.5s; padding-top: 30px; padding-bottom:30px;";
        }
    });
  });

function openNav() {
  var element, name, arr;
  var x = document.getElementsByClassName("header");
  element = x[0];
  name = "open";
  arr = element.className.split(" ");
  if (arr.indexOf(name) == -1) {
    element.className += " " + name;
  }
  document.getElementsByClassName("header-hamburger")[0].onclick = function() { closeNav(); }
}

function closeNav() {
  var x = document.getElementsByClassName("header");
  var element = x[0];
  element.className = element.className.replace(/\bopen\b/g, "");
  document.getElementsByClassName("header-hamburger")[0].onclick = function() { openNav(); }
}
