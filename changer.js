// Create Variables and saves DOM Elements to each
var newBGColor = document.getElementById("newBGColor");
var colorChangeButton = document.getElementById("colorChangeButton");


colorChangeButton.addEventListener("click", colorChanger);
    
function colorChanger(){

    document.body.style.backgroundColor = newBGColor.value;
    
}