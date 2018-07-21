/*function openNav(){
  var x = document.getElementById("header");
  //var head = document.getElementsByClassName("header");
  x.className += "open";
};*/

$("#hamburger").click(function(){
    $("#header").addClass("open");
});

$(function() {
    var obsah = document.getElementById("header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            obsah.style = "background-color: #10263C; opacity:0.85; transition: 0.5s; padding-top: 10px; padding-bottom:10px; width:100%";
            document.getElementById("head-logo").style = "margin-left: 10px; z-index:999;";
            document.getElementById("hamburger").style = "margin-right: 10px; z-index:999;";
            document.getElementById("tip-butt").style = "margin-right: 10px";
        } else {
          obsah.style = "background: transparent; transition: 0.5s; padding-top: 30px; padding-bottom:30px; width:85%";
          document.getElementById("head-logo").style = "margin-left: 0px; z-index:999;";
          document.getElementById("hamburger").style = "margin-right: 0px; z-index:999;";
          document.getElementById("tip-butt").style = "margin-right: 0px";
        }
    });
  });

function openNav() {
    var element, name, arr;
    element = document.getElementById("header");
    name = "open";
    arr = element.className.split(" ");
    if (arr.indexOf(name) == -1) {
        element.className += " " + name;
    }

  document.getElementById("hamburger").onclick = function() { closeNav(); }
}

function closeNav() {
    var element = document.getElementById("header");
    element.className = element.className.replace(/\bopen\b/g, "");

  document.getElementById("hamburger").onclick = function() { openNav(); }
}
