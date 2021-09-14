// Getting all the Input Sections -Bill, Select Tip %, Custom % Input, Number of People
let bill = $('input[name="bill"]');
let tipAmountOptions = $('.percentage button');
let customTipOption = $('.percentage input');
let personInput = $('input[name="people"]');

// Getting the Input Sections where Amounts are displayed
let tipAmountPerPerson = $('input[name="tip-amount"]');
let totalAmountPerPerson = $('input[name="total"]');

// Getting the Reset Button
let resetButton = $('#reset');


// Function to Calculate the Amounts and Display it
function giveAmountPerPerson(selectedTipOption) {
    let billAmount = bill.val();
    let numberOfPeople = personInput.val();

    // If the Number of People entered is  zero then give error
    if (numberOfPeople === '0') {
        $('label[for="error"]').css('display', 'inline');
        $('.input:last-child').css('border', '2px solid red');
    }
    // Else calculate the amount
    else {
        $('label[for="error"]').css('display', 'none');
        $('.input:last-child').css('border', 'none');
        tipAmountPerPerson.val((billAmount / 100) * selectedTipOption / numberOfPeople);
        totalAmountPerPerson.val(eval(`(${billAmount} + (${billAmount} / 100) * ${selectedTipOption} )/ ${numberOfPeople}`));
    }
}


// Passing the selected tip percentage to the function after clicking on the buttons
tipAmountOptions.on('click', (e) => {
    let selectedTipOption = e.target.innerText.slice(0, -1);
    giveAmountPerPerson(selectedTipOption);
})

// Custom Tip percentage passed to the function
customTipOption.on('change', () => {
    let customTip = customTipOption.val();
    giveAmountPerPerson(customTip);
})

// Functionality of Reset Button
resetButton.on('click', () => {
    bill.val('');
    personInput.val('');
    tipAmountPerPerson.val('0.00');
    totalAmountPerPerson.val('0.00');
    customTipOption.val('');
    $('label[for="error"]').css('display', 'none');
    $('.input:last-child').css('border', 'none');
})

