// ------------------------------
// Quotes Storage Setup
// ------------------------------
let quotes = [
  { text: "The best way to predict the future is to invent it.", category: "Inspiration" },
  { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Motivation" },
];

// Load quotes from localStorage if in browser
if (typeof localStorage !== "undefined") {
  const storedQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
  if (storedQuotes.length > 0) {
    quotes = storedQuotes;
  }
}

// ------------------------------
// DOM References (only in browser)
// ------------------------------
let quoteDisplay, quoteCategory, newQuoteText, newQuoteCategory, addQuoteBtn, newQuoteBtn;

if (typeof document !== "undefined") {
  quoteDisplay = document.getElementById("quoteDisplay");
  quoteCategory = document.getElementById("quoteCategory");
  newQuoteText = document.getElementById("newQuoteText");
  newQuoteCategory = document.getElementById("newQuoteCategory");
  addQuoteBtn = document.getElementById("addQuoteBtn");
  newQuoteBtn = document.getElementById("newQuoteBtn");
}

// ------------------------------
// Functions
// ------------------------------
function displayRandomQuote() {
  if (!quotes.length) return null;

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  if (typeof document !== "undefined") {
    quoteDisplay.textContent = randomQuote.text;
    quoteCategory.textContent = `Category: ${randomQuote.category}`;
  }

  return randomQuote; // usable in Node.js
}

function addQuote(text, category) {
  if (!text || !category) return null;

  const newQuote = { text, category };
  quotes.push(newQuote);

  if (typeof localStorage !== "undefined") {
    localStorage.setItem("quotes", JSON.stringify(quotes));
  }

  if (typeof document !== "undefined") {
    quoteDisplay.textContent = newQuote.text;
    quoteCategory.textContent = `Category: ${newQuote.category}`;
  }

  return newQuote; // usable in Node.js
}

// ------------------------------
// Event Listeners (only in browser)
// ------------------------------
if (typeof document !== "undefined") {
  newQuoteBtn.addEventListener("click", displayRandomQuote);

  addQuoteBtn.addEventListener("click", () => {
    addQuote(newQuoteText.value, newQuoteCategory.value);
    newQuoteText.value = "";
    newQuoteCategory.value = "";
  });
}

// ------------------------------
// Export for Node.js testing
// ------------------------------
if (typeof module !== "undefined") {
  module.exports = { displayRandomQuote, addQuote, quotes };
}
