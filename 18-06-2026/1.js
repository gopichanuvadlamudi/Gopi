function ticketPrice() {

    // Get values from HTML
    let age = Number(document.getElementById("age").value);
    let showtime = document.getElementById("showtime").value;

    // Get result element
    let resultText = document.getElementById("result");

    
    if (isNaN(age) || age <= 0) {
        resultText.textContent = " Invalid age.";
    }
    else if (age < 12) {
        resultText.textContent = " Child Ticket Price: 5";
    }
    else if (age >= 65) {
        resultText.textContent =  "Senior Citizen Ticket Price: 7";
    }
    else if (showtime === "matinee") {
        resultText.textContent = " Adult Matinee Ticket Price: 10";
    }
    else {
        resultText.textContent = " Adult Evening Ticket Price: 15";
    }

}