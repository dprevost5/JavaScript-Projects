//create a switch statment
function Drink_Function() {
    var Drink_Output;
    var Drinks = document.getElementById("drink_input").value;
    var Drink_String = " is a great choice!";
    switch (Drinks) {
        case "Coffee":
            Drink_Output = "Coffee" + Drink_String;
        break;
        case "Tea":
            Drink_Output = "Tea" + Drink_String;
        break;
        case "Water":
            Drink_Output = "Water" + Drink_String;
        break;
        case "Soda":
            Drink_Output = "Soda" + Drink_String;
        break;
        case "Juice":
            Drink_Output = "Juice" + Drink_String;
        break;
        case "Alternative Milks":
            Drink_Output = "Alternative Milks" + Drink_String;
        break;
        default:
        Drink_Output = "Please enter a drink exactly as written in the above list";
    }
    document.getElementById("output").innerHTML = Drink_Output;
}

//create a function using the document.getElementsByClassName() method
function change_Function() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "The text has changed!";
}

//add a graphic within the canvas tag
var c = document.getElementById("id_Name");
var ctx = c.getContext("2d");
ctx.font = "80px Arial";

//create gradiant
var gradient = ctx.createLinearGradient(0,0, c.width, 0);
gradient.addColorStop("0", "green");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("1.0", "red");

//fill with gradient
ctx.strokeStyle = gradient;
ctx.strokeText("Hello there!",40,150);

//create a gradient color background within a canvas tag
var d = document.getElementById("color_grad");
var dtx = d.getContext("2d");
var grd = dtx.createLinearGradient(0, 0, 375, 0);
grd.addColorStop(0, "black");
grd.addColorStop(0.5, "red");
grd.addColorStop(1, "white");
dtx.fillStyle = grd;
dtx.fillRect(0, 0, 375, 250);