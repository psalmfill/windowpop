var btn = document.getElementById('button');
// get the width and the height of the user screen
var screenWidth = (screen.width/2)+100;
var screenHeight = (screen.height/2) +100;

//attach effect on the button
btn.onclick = function(){
  window.open(
    "https://www.google.com",
    "",
    "width=600,height=300, resizeable=false,left="+screenWidth +"px, top="+ screenHeight+"px");
}
document.getElementById('button1').onclick = function(){
  window.open(
    "https://www.google.com",
    "",
    "width=600,height=300,left="+screenWidth +", top="+ screenHeight);
}
