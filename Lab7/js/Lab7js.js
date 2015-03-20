//Eventlisteners
var elSelect = document.getElementById("mySelect");
elSelect.addEventListener("change", changeBackground, false);

var elDblClick = document.getElementsByTagName("body")[0];
elDblClick.addEventListener("dblclick", dblClick, false);


var elImg = document.getElementById("image");
elImg.addEventListener("mouseover", toNight, false);
elImg.addEventListener("mouseout",toDay,false);


function dblClick(){
    
        window.open("http://espn.go.com/","_blank","width= 600, height=500");
     }
                            

function changeBackground() {
    var x = document.getElementById("mySelect").selectedIndex;
    document.body.style.background = document.getElementsByTagName("option")[x].value;
}

function toNight() {
  var nightImage = document.getElementById("nightImage");
  nightImage.className = "solid";
}

function toDay() {
  var nightImage = document.getElementById("nightImage");
  nightImage.className = "transparent";
}

