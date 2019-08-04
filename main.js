// Query Selectors

const myForm = document.getElementById('my-form');
const outputText = document.getElementById('output-text');
const hidden = document.getElementById('hidden');

// Declare Variables for Values

let totalAmount ;
let serviceRating ;
let peoplePaying ;

// Functions

function calculateTip(amount, percent, people) {
    let tip ;
    serviceRating = serviceRating / 100;

    if (peoplePaying == 1 || peoplePaying == 'undefined') {
        tip = totalAmount * serviceRating;
    } else {
        tip = (totalAmount * serviceRating) / peoplePaying;
    }
    
    return(tip);
}

function completeDOM() {
    window.addEventListener('DOMContentLoaded', (e) => {
        console.log('DOM fully loaded and parsed');
    });
};

function reset() {
    myForm.addEventListener('reset', (e) => {
        hidden.classList.add('hidden');
    })
}

function compileData() {
    myForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Capture Data from Form and ParseInt

        totalAmount = parseInt(document.getElementById('total-amount').value);
        serviceRating = parseInt(document.getElementById('service-rating').value);
        peoplePaying = parseInt(document.getElementById('split').value);

        if (peoplePaying == 1 || peoplePaying == undefined) {
            outputText.innerHTML = '$' + calculateTip(totalAmount, serviceRating, peoplePaying);
        } else {
            outputText.innerHTML = '$' + calculateTip(totalAmount, serviceRating, peoplePaying) + ' per person.';
        }

        

        hidden.classList.remove('hidden');
    })
}

function runProgram() {
    completeDOM();
    compileData();
    reset();
}

runProgram();

