// Array of quotes
const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "life" },
  { text: "Do not let what you cannot do interfere with what you can do.", category: "inspiration" }
];

// Function to display a random quote
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.textContent = quotes[randomIndex].text;
}

// Function to add a new quote
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  if (textInput.value && categoryInput.value) {
    quotes.push({
      text: textInput.value,
      category: categoryInput.value
    });

    displayRandomQuote(); // Update display
    textInput.value = "";
    categoryInput.value = "";
  }
}

// Event listener for "Show New Quote" button
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);

// Display an initial quote when page loads
displayRandomQuote();
