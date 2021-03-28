function addition_Function() {                 //create function
    var addition = 10 + 10;                   //assign variable name "addition" and use the addition operator to assign the value
    document.getElementById("Math").innerHTML = "10 + 10 = " + addition;   //use the text of "10 + 10 = " plus the variable "addition" to display the math expression in the HTML doc
}

function subtraction_Function() {
    var Subtraction = 10 - 10;
    document.getElementById("sub").innerHTML = "10 - 10 = " + Subtraction;
}

function multiply_Function() {
    var simple_Math = 10 * 10;
    document.getElementById("multiply").innerHTML = "10 * 10 = " + simple_Math;
}

function divide_Function() {
    var simple_Math = 10 / 10;
    document.getElementById("divide").innerHTML = "10 / 10 = " + simple_Math;
}

function multiops_Function() {
    var simple_Math = (1+2) * 4 / 3 - 4;
    document.getElementById("multiops").innerHTML = "1 plus 2, multiplied by 4 divided by 3 and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("modulus").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {    //create function
    var x = 10;                   //assign variable x the value of 10
    document.getElementById("negation").innerHTML = -x;   //use negation operator to display the negative value of x
}

function plusandminus() {
var X = 5        //assign value of 5 to the variable named X
X++              //use the increment to decrease variable X by 1
document.write(X);  //display X in HTML document

var Y = 112      //assign value of 112 to variable named Y
Y--              //use the decrement operator to decrease Y by 1
document.write(Y);  //display Y in HTML document
}

function rando_Function() {
    document.getElementById("rando").innerHTML = Math.floor(Math.random() * 100);    //create a window alert that displays a random number between 0 and 100
}

document.getElementById("method").innerHTML = Math.floor(4.7);   //display number rounded down by using a math object method
