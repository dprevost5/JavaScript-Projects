document.write(typeof "coffee");  //display type of date using "typeof" operator

document.write("100" + 5);       //display data using "type coercion"

function my_Function() {
    document.getElementById("test").innerHTML = 0/0;  //display Not a Number in html doc
}

function my_Function2() {
    document.getElementById("test2").innerHTML = isNaN("I love coffee!");  //display true or false to question of is this data Not a Number?
}

function my_Function3() {
    document.getElementById("test3").innerHTML = isNaN("444");  //display true or false to question is this data Not a Number?
}

function Positive_Infinity() {
    document.getElementById("infinity").innerHTML = 2E310;  //display positive infinity
}

function Negative_Infinity() {
    document.getElementById("neginfinity").innerHTML = -3E310;  //display negative infinity
}

function Boolean_True() {
    document.getElementById("bool1").innerHTML = (10 > 2);  //display true or false using greater than sign
}

function Boolean_False() {
    document.getElementById("bool2").innerHTML = (10 < 2);  //display true or false using less than sign
}

console.log(10 + 10);   //display the answer to a math expression in the console

console.log(100 < 99);   //display false using boolean logic in the console

function double_True() {
    document.getElementById("double").innerHTML = (10 == 10);  //display true using a double equal sign
}

function double_False() {
    document.getElementById("double2").innerHTML = (3 == 11);  //display false using a double equal sign
}

function triple_True() {
    X = 10;                 //make variables have matching data types and values to display a true
    Y = 10;
    document.getElementById("triple").innerHTML = (X===Y);  //display true/false using triple equal signs
}

function triple_False1() {
    X = 32;                 //make variables have different data type and value to display a false
    Y = "40";
    document.getElementById("triple2").innerHTML = (X===Y);  //display true/fase using triple equal signs
}

function triple_False2() {
    A = 32;                 //make variables have different data types, but same value
    B = "32";
    document.getElementById("triple3").innerHTML = (A===B);  //display true/false using triple equal signs
}

function triple_False3() {
    A = "Hello";            //make variables have same data types, but different values
    B = "How are you?";
    document.getElementById("triple4").innerHTML = (A===B);  //display true/false using triple equal signs
}

function logical_ANDtrue() {
    document.getElementById("and1").innerHTML = (10>6 && 20>4);  //display true using AND operator
}

function logical_ANDfalse() {
    document.getElementById("and2").innerHTML = (10>6 && 4>20);  //display false using AND operator
}

function logical_ORtrue() {
    document.getElementById("or1").innerHTML = (5<10 || 10<20);  //display true using OR operator
}

function logical_ORfalse() {
    document.getElementById("or2").innerHTML = (5>10 || 10>20);  //display false using OR operator
}

function logical_NOTtrue() {
    document.getElementById("not1").innerHTML = !(5>10);
}

function logical_NOTfalse() {
    document.getElementById("not2").innerHTML = !(20>10);
}