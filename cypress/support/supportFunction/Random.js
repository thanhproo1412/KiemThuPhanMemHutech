// Function to generate a random 20-digit number
export function generateRandom20DigitNumber() {
    const min = Math.pow(10, 19); // Minimum 20-digit number
    const max = Math.pow(10, 20) - 1; // Maximum 20-digit number
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to generate a random 10-digit number
export function generateRandom10DigitNumber() {
    const min = Math.pow(10, 9); // Minimum 10-digit number
    const max = Math.pow(10, 10) - 1; // Maximum 10-digit number
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to generate a random 30-digit number
export function generateRandom30DigitNumber() {
    const min = BigInt(Math.pow(10, 29)); // Minimum 30-digit number (using BigInt)
    const max = BigInt(Math.pow(10, 30)) - BigInt(1); // Maximum 30-digit number
    return BigInt(Math.floor(Math.random() * Number(max - min + BigInt(1)) + Number(min)));
}

// Function to generate a random 40-digit number
export function generateRandom40DigitNumber() {
    const min = BigInt(Math.pow(10, 39)); // Minimum 40-digit number (using BigInt)
    const max = BigInt(Math.pow(10, 40)) - BigInt(1); // Maximum 40-digit number
    return BigInt(Math.floor(Math.random() * Number(max - min + BigInt(1)) + Number(min)));
}

