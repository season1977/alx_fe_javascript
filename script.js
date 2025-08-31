// Array of quote objects
let quotes = [
  { text: "Believe in yourself!", category: "Motivation" },
  { text: "Learning never stops.", category: "Education" },
  { text: "Keep pushing forward.", category: "Motivation" }
];

// Display a random quote
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById("quoteDisplay").textContent = `${quote.text} (${quote.category})`;
}

// Add a new quote
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");
  const text = textInput.value.trim();
  const category = categoryInput.value.trim();

  if (text && category) {
    quotes.push({ text, category });
    displayRandomQuote();
    textInput.value = "";
    categoryInput.value = "";
  } else {
    alert("Please enter both quote text and category.");
  }
}

// Event listeners
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);
document.getElementById("addQuoteBtn").addEventListener("click", addQuote);

// Show an initial quote
displayRandomQuote();
