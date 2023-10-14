document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.querySelector(".celsiusinput");
    const fahrenheitInput = document.querySelector("#fahrenheit input");
    const kelvinInput = document.querySelector("#kelvin input");
    const calculateButton = document.querySelector(".btn");

    calculateButton.addEventListener("click", function () {
       
        const celsiusValue = parseFloat(celsiusInput.value);

        
        if (!isNaN(celsiusValue)) {
           
            const fahrenheitValue = (celsiusValue * 9/5) + 32;
            const kelvinValue = celsiusValue + 273.15;

         
            fahrenheitInput.value = fahrenheitValue.toFixed(2);
            kelvinInput.value = kelvinValue.toFixed(2);
        } else {
            alert("Please enter a valid number in the Celsius input field.");
        }
    });
});