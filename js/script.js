// JS Event Handling Lab
// Author: Alberto Sardo

document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const alertButton = document.getElementById("alertButton");
    const inputField = document.getElementById("textInput");
    const headline = document.getElementById("headline");
    
    // Event Listener for button click
    alertButton.addEventListener("click", function () {
        const userInput = inputField.value;
        const alertMessage = "Alberto: " + userInput;
        alert(alertMessage);
        
        // Update the headline with the input value
        headline.textContent = userInput;
    });
});


