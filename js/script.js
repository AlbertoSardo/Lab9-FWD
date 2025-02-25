document.addEventListener("DOMContentLoaded", function () {
    
    const alertDiv = document.getElementById("entrybutton");
    const textInput = document.getElementById("entryinput");
    const resultHeading = document.getElementById("textoutput");

    const userName = "Alberto Sardo"; 

    alertDiv.addEventListener("click", function () {

        const inputValue = textInput.value;

        alert(`${userName}: ${inputValue}`);
        
        resultHeading.textContent = inputValue;
    });
});


