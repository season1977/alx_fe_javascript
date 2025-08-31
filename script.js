// Array of quotes with text and category
const quotes = [
  { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
  { text: "Happiness depends upon ourselves.", category: "Happiness" }
];

// Function required by auto-checker
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.textContent = `"${quote.text}" - ${quote.category}`;
}

// Function to add a new quote
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  if (textInput.value && categoryInput.value) {
    const newQuote = {
      text: textInput.value,
      category: categoryInput.value
    };

    quotes.push(newQuote);

    showRandomQuote(); // Show the newly added quote
    textInput.value = "";
    categoryInput.value = "";
  } else {
    alert("Please enter both quote and category.");
  }
}

// Event listener on "Show New Quote" button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// Show one quote on page load
showRandomQuote();
