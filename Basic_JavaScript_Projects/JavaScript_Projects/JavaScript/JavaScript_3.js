function displayType(star) {
    var starType = star.getAttribute("data-star-type");
    alert(starType + " is a major star in the " + star.innerHTML + " constellation!");
}