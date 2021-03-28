function My_First_Function() {   //create function
    var str = "I love coffee!";  //assign first variable
    var result = str.fontcolor("brown");  //assign second variable
    document.getElementById("coffee").innerHTML = result;  //use document.getElementById method to return the element with ID attribute "coffee"
}

function myFunction() {     //create function
    var sentence = "I like to drink coffee";  //assign string value to variable
    sentence += " in the morning.";  //concatenate the string
    document.getElementById("concatenate").innerHTML = sentence;  //use document.getElementById method to return element with ID attribute "concatenate"
}

function myFunction2() {    //create function
    document.getElementById("change").innerHTML = "Do you love coffee?";  //use document.getElementById method to return element with ID attribute "change"
    var x = document.getElementById("change");  //assign value to variable so x = the element with id attribute "change"
    x.style.color = "blue";    //style font color so x = blue
}