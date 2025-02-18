function init() {
    const button = document.getElementById("alertButton");
    const inputField = document.getElementById("nameInput");
    const headline = document.getElementById("headline"); 
    
    if (!button || !inputField || !headline) {
        console.error("One or more elements are missing from the DOM.");
        return;
    }

    button.addEventListener("click", function () {
        const inputValue = inputField.value;
        alert("[Your Name]: " + inputValue);
        headline.textContent = inputValue; 
}

window.addEventListener("DOMContentLoaded", init);
