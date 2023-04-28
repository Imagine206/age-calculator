const dayInput = document.getElementById('inputDay');
const monthInput = document.getElementById('inputMonth');
const yearInput = document.getElementById('inputYear');
const errorEl = document.getElementById('errorMessage')

const dayOutput = document.getElementById('days')
const monthsOutput = document.getElementById('months')
const yearsOutput = document.getElementById('years');


yearInput.addEventListener('keyup', () => {
    console.log("hello it changed")
    inputValidation();
});

function inputValidation(){
    const userDayInput = dayInput.value;
    
    if (parseInt(userDayInput) > 2){
        errorEl.textContent = "only 2 numbers"
        console.log("you put too much numbers")
    }
}

