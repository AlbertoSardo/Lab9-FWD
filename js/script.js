function init() {
    // Get references to the DOM elements
    const button = document.getElementById("alertButton");
    const inputField = document.getElementById("nameInput");
    const headline = document.getElementById("headline");
    
    if (!button || !inputField || !headline) {
        console.error("One or more elements are missing from the DOM.");
        return;
    }

    // Add event listener for button click
    button.addEventListener("click", function () {
        // Get input value
        const inputValue = inputField.value;
        
        // Show alert with name prefix
        alert("[Your Name]: " + inputValue);
        
        // Change headline text
        headline.textContent = inputValue;
    });
}

window.addEventListener("DOMContentLoaded", init);

