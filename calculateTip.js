function calculateTip(billAmount, tipPercentage) {
    // Check if the inputs are valid
    if (typeof billAmount !== 'number' || typeof tipPercentage !== 'number') {
        return "Invalid input. Both bill amount and tip percentage should be numbers.";
    }

    if (tipPercentage < 0 || tipPercentage > 100) {
        return "Invalid tip percentage. Please provide a percentage between 0 and 100.";
    }

    // Calculate the tip
    const tip = billAmount * (tipPercentage / 100);

    return tip;
}

// Example usage
const billAmount = 50;
const tipPercentage = 15;

const tip = calculateTip(billAmount, tipPercentage);
console.log(`The calculated tip is: $${tip.toFixed(2)}`);
