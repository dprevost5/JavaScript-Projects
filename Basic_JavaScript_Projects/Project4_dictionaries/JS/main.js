function my_Dictionary() {      //create function for a dictionary
    var Coffee1 = {             //assign Coffee1 as variable name
        Brand: "Fair Trade",    //create key-value pairs
        Potency: "Decaf",
        Origin: "Ethiopia",
        Type: "Arabica",
        Roast: "Dark"
    };
    delete Coffee1.Type         //delete a key-value pair from dictionary
    document.getElementById("Dictionary").innerHTML = Coffee1.Type;  //use document.getElementById method to display the value of the key "Type" in HTML doc
}