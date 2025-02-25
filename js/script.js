document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const alertDiv = document.getElementById("alertMe");
    const textInput = document.getElementById("textInput");
    const resultHeading = document.getElementById("resultHeading");

    // Your name to append in the alert
    const userName = "Alberto Sardo"; // Change this to your actual name

    // Add event listener to the Alert Me div
    alertDiv.addEventListener("click", function () {
        // Get input value
        const inputValue = textInput.value;
        
        // Show alert with name and input text
        alert(`${userName}: ${inputValue}`);
        
        // Change the h2 text to input value
        resultHeading.textContent = inputValue;
    });
});


