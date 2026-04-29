console.log("Script started");

// Add your quotes here
let quotes = [
    // You add quotes here!
];

// Function to get random quote
function getRandomQuote() {
    // You write the Math.random() code here
    // Return a random quote from the array
}

// Function to display quote
function displayQuote() {
    let randomQuote = getRandomQuote();
    let quoteElement = document.getElementById("quote-text");
    // You finish this line to show the quote
}

// Connect button to function
let button = document.getElementById("new-quote-btn");
button.addEventListener("click", displayQuote);

