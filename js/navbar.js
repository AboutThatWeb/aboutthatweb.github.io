document.addEventListener("DOMContentLoaded", function() {
    fetch("../navbar.html")
        .then(response => {
            return response.text()
        }
        )
        .then(data => {
            // Insert the navbar into a class called navbar-container
            document.querySelector(".navbar-container").innerHTML = data;
        });
});