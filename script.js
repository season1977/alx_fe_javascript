// Quotes array with text and category
const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
  { text: "Do what you can with what you have, where you are.", category: "Inspiration" }
];

// Function to display a random quote
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  const display = document.getElementById("quoteDisplay");
  display.innerHTML = `<p>${quote.text} <strong>(${quote.category})</strong></p>`;
}

// Function to add a new quote
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const text = textInput.value.trim();
  const category = categoryInput.value.trim();

  if (text && category) {
    quotes.push({ text, category });
    textInput.value = "";
    categoryInput.value = "";
    displayRandomQuote(); // Show the new quote immediately
  } else {
    alert("Please enter both a quote and a category.");
  }
}

// Event listeners
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);
document.getElementById("addQuoteBtn").addEventListener("click", addQuote);

// Show a quote initially
displayRandomQuote();
