function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Animals = ["Cat", "Dog", "Pig", "Hampster", "Cow", "Bird", "Lizard"]
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Animals.length; Y++) {
    Content += Animals[Y] + "<br>";
    }
    document.getElementById("List_of_Animals").innerHTML = Content;
}

function array_Function() {
    var dog_pic = [];
    dog_pic[0] = "barking";
    dog_pic[1] = "sleeping";
    dog_pic[2] = "eating";
    dog_pic[3] = "playing";
    document.getElementById("Array").innerHTML = "In this picture, the dog is " +
        dog_pic[2] + ".";
}

function constant_Function() {
    const Dog_Breed1 = {breed: "Poodle", type: "standard", color: "white"};
    Dog_Breed1.color = "black";
    Dog_Breed1.price = "$1000";
    document.getElementById("Constant").innerHTML = "The " + Dog_Breed1.color + " " +
        Dog_Breed1.breed + " is " + Dog_Breed1.price + ".";
}

//utilize let keyword. Need to create a function because document.write() method doesn't work with the defer attribute in the script tag
function let_Function() {
    var X = 100;
    document.getElementById("let").innerHTML = X;
    {
        let X = 1111;
        document.getElementById("let2").innerHTML ="<br>" + X;
    }
    document.getElementById("let3").innerHTML ="<br>" + X;
} 

//utilize return statemnt
function return_Function(name) {
    return "Hello, " + name + "!";
}
document.getElementById("return").innerHTML = return_Function("Devon");

//create an object using the let keyword, give it properties and a method
let dog = {
    breed: "Poodle",
    type: "standard",
    age: "6 months",
    color: "black",
    description : function() {
        return "The dog is a " + this.color + " " + this.type + " " + this.breed;
    }
}
document.getElementById("object").innerHTML = dog.description();

//write a loop that includes at least one break statement
var text = "";
var k;
for (k = 0; k < 10; k++) {
    if (k === 5) { break; }
    text += "The number is " + k + "<br>";
}
document.getElementById("break").innerHTML = text;

//write a loop that includes at least one continue statement
var sentence = "";
var f;
for (f = 0; f < 10; f++) {
    if (f === 3) { continue; }
    sentence += "The number is " + f + "<br>";
}
document.getElementById("continue").innerHTML = sentence;
