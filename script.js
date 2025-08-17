// Initial quotes array
let quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Don’t let yesterday take up too much of today.", category: "Wisdom" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", category: "Inspiration" }
];

// Select DOM elements
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteBtn = document.getElementById("newQuote");
const addQuoteBtn = document.getElementById("addQuoteBtn");
const newQuoteText = document.getElementById("newQuoteText");
const newQuoteCategory = document.getElementById("newQuoteCategory");

// Function to show random quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteDisplay.innerHTML = `"${quote.text}" <br><em>— ${quote.category}</em>`;
}

// Function to add a new quote dynamically
function addQuote() {
  const text = newQuoteText.value.trim();
  const category = newQuoteCategory.value.trim();

  if (text && category) {
    // Add to quotes array
    quotes.push({ text, category });

    // Update display
    quoteDisplay.innerHTML = `✅ New quote added: "${text}" <br><em>— ${category}</em>`;

    // Clear inputs
    newQuoteText.value = "";
    newQuoteCategory.value = "";
  } else {
    alert("Please enter both a quote and a category!");
  }
}

// Event listeners
newQuoteBtn.addEventListener("click", showRandomQuote);
addQuoteBtn.addEventListener("click", addQuote);
