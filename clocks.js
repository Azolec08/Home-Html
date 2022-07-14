var circle = document.getElementById("circle")
var upButton = document.getElementById("upbutton")
var downButton = document.getElementById("downbutton")

var rotateValue = circle.style.transform;
var rotateSum;

upButton.onclick = function()
{
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

downButton.onclick = function()
{
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

