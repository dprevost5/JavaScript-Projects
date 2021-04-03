//utilize the concat() method to connect two or more strings
function concatMethod_Function() {
    var part_1 = "I just "
    var part_2 = "switched from "
    var part_3 = "coffee to tea. "
    var part_4 = "Weeeee!"
    var full_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concat").innerHTML = full_sentence;
}

//write a slice() method
function slice_Method() {
    var words = "Tom & Jerry was my favorite cartoon as a kid."
    var section = words.slice(0, 11);
    document.getElementById("slice").innerHTML = section;
}

//write a function using the toUpperCase() method
function uppercase_Method() {
    var str = "Can you hear me?";
    var res = str.toUpperCase();
    document.getElementById("uppercase").innerHTML = res;
}

//write a function using the search() method
function search_Method() {
    var sentence = "Everyone knows who Walt Disney is.";
    var Q = sentence.search("Walt Disney");
    document.getElementById("search").innerHTML = Q;
}

//write a function using the toString() method
function string_Method() {
    var X =999;
    document.getElementById("numbers_to_string").innerHTML = X.toString();
}

//write a function using the toPrecision() method
function precision_Method() {
    var Y = 20458.40399991209;
    document.getElementById("precision").innerHTML = Y.toPrecision(10);
}

//write a function using the toFixed() method
function toFixed_Method() {
    var num = 11.10989;
    var Z = num.toFixed(2);
    document.getElementById("fixed").innerHTML = Z;
}

//write a function using the valueOf() method
function valueOf_Method() {
    var A = "What a wonderful world!";
    var res = A.valueOf();
    document.getElementById("valueOf").innerHTML = res;
}