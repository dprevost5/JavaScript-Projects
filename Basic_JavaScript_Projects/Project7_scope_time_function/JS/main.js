//Write a global variable
var X = 5;
function add_Numbers_1() {
    document.write(20 + X + "<br>");
}
function add_Numbers_2() {
    document.write(X + 100 + "<br>");
}
add_Numbers_1();
add_Numbers_2();

//Write a local variable
function multiply_Numbers_1() {
    var Y = 10
    document.write(Y * 5);
}
multiply_Numbers_1();

//intentionally write a function with an error and use console.log() to debug
function subtract_Numbers_1() {
    var Z = 100
    console.log(Z - 25);
}
function subtract_Numbers_2() {
    console.log(Z - 40);
}
subtract_Numbers_1();
subtract_Numbers_2();

//write an if statement utilizing Date().getHours() method
function teatime_Function() {
    if (new Date().getHours() < 16) {
        document.getElementById("teatime").innerHTML = "It's time for tea!";
    }
}

//write my own if statement in a function
function myFunction() {
    if (new Date() > 2020) {
    document.getElementById("date").innerHTML = "You can get vaccinated now."; 
    }
}

//write a function that includes an if/else statement
function alcoholAuthorization() {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Drink = "You are old enough to buy alcohol";
    }
    else {
        Drink = "You are not old enough to buy alcohol";
    }
    document.getElementById("yourAge").innerHTML = Drink;
}

//write out all the code for the Else If statements from Step 149
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It's morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It's afternoon";
    }
    else {
        Reply = "It's evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}