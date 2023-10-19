var butn = document.querySelector("#myButton");
var userInput = document.querySelector("#user-input");
var container = document.querySelector("#container");
var body = document.querySelector("body");

var monday =["ECO323", "IFS353", "MAN305", "IFS362"];
var tuesday=["IFS353", "MAN305"];
var wednesday=["IFS362", "MAN303", "STAS3302"];
var thursday=["IFS353", "STAS302"];
var friday=["No class! Whoop! WHOOP!"];

function setHoverColor() {
    butn.style.background = "#DC143C";

}

function setNormalColor(){
    butn.style.background = "";

}
butn.addEventListener("mouseover", setHoverColor);
butn.addEventListener("mouseout", setNormalColor);
butn.addEventListener("click", printTimetable);


function printTimetable()
{
if (userInput.value=="Monday")
    {
        for (var i = 0; i < monday.length; i++)
        var paraText = document.createElement("p");
        var paraNode = document.createTextNode(monday[i]);
        paraText.appendChild(paraNode);
        container.appendChild(paraText);
    }




if (userInput.value=="Tuesday")
    {
        for (var i = 0; i < tuesday.length; i++)
        var paraText = document.createElement("p");
        var paraNode = document.createTextNode(tuesday[i]);
        paraText.appendChild(paraNode);
        container.appendChild(paraText);
    }
    

if (userInput.value=="Wednesday")
    {
        for (var i = 0; i < wednesday.length; i++)
        var paraText = document.createElement("p");
        var paraNode = document.createTextNode(wednesday[i]);
        paraText.appendChild(paraNode);
        container.appendChild(paraText);
}


if (userInput.value=="Thursday")
    {
        for (var i = 0; i < thursday.length; i++)
        var paraText = document.createElement("p");
        var paraNode = document.createTextNode(thursday[i]);
        paraText.appendChild(paraNode);
        container.appendChild(paraText);
}



if (userInput.value=="Friday")
    {
        for (var i = 0; i < friday.length; i++){
        var paraText = document.createElement("p");
        var paraNode = document.createTextNode(friday[i]);
        var img = document.createElement("img");
        img.src="friday-meme.jpeg"
        paraText.appendChild(paraNode);
        container.appendChild(paraText);
        paraText.style.cssText="font-size:24px;"
        body.appendChildimg
    }


    }
}