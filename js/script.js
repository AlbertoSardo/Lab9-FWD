document.addEventListener("DOMContentLoaded", function () {
    const alertDiv = document.getElementById("entrybutton");
    const textInput = document.getElementById("entryinput");
    const resultHeading = document.getElementById("textoutput");

    const userName = "Alberto"; 
    
    alertDiv.addEventListener("click", function () {
        
        const inputValue = textInput.value.trim();

        if (inputValue) {
            
            alert(`${userName}: ${inputValue}`);

            resultHeading.textContent = inputValue;
        } else {
            alert("Please enter a message before clicking 'Alert Me'.");
        }
    });
});


