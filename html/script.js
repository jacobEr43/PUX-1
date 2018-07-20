/*function openNav(){
  var x = document.getElementById("header");
  //var head = document.getElementsByClassName("header");
  x.className += "open";
};*/

$("#hamburger").click(function(){
    $("#header").addClass("open");
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
