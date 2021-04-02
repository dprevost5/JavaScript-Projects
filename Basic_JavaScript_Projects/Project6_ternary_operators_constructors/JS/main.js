//create function using ternary operators
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//create function using ternary operators
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough" : "You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

//Constructor function for Vehicle objects
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
//create three Vehicle objects with owners
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
//function to display Erik's vehicle color, model, and year
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

//Constructor function for Pet objects
function Pet(Name, Type, Color, Age) {
    this.Pet_Name = Name;
    this.Pet_Type = Type;
    this.Pet_Color = Color;
    this.Pet_Age = Age;
}
//create three Pet objects with owners
var Devon = new Pet("Snowball", "cat", "white", 8);
var Jenn = new Pet("Sonic", "turtle", "brown", 2);
var Rob = new Pet("Spot", "dog", "black and white", 5);
//function to display Devon's pet, name, and color
function myFunction2() {
    document.getElementById("New_and_This").innerHTML =
    "Devon has a " + Devon.Pet_Type + ", " + Devon.Pet_Name +
    " that is " + Devon.Pet_Color;
}

//Constructor function for Student objects
function Student(first, last, DOB, homeroom) {
    this.firstName = first;
    this.lastName = last;
    this.DOB = DOB;
    this.homeroom = homeroom;
}

//Create a nested function
function counting_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
