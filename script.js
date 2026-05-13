console.log("Script started");

// Add your quotes here
let quotes = [
    "Do the best you can until you know better. Then when you know better, do better. - Maya Angelou",
    "If there is no struggle, there is no progress. - Frederick Douglass",
    "Change is the law of life and those who look only to the past or present are certain to miss the future. - John F. Kennedy"
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

// Display a quote when the page loads
displayQuote();

function getRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];  // You need to add this!
}


