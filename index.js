// Example input (make sure this matches the expected values)
const batteryBatches = [4, 5, 3, 7, 2, 10]; // This should add up to 31

// Calculate the total batteries
const totalBatteries = batteryBatches.reduce(function(sum, element) { 
    return sum + element;
}, 0); // Initialize the sum to 0

console.log(totalBatteries); // Should output 31 if the input is correct
