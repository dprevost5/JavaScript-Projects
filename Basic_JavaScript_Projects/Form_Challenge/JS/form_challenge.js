function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["lname"].value;
    var z = document.forms["myForm"]["phone"].value;
    if (x == "" || y == "" || z == "") {
        alert("All fields must be filled out");
        return false;
    }
}