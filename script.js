// Load saved quotes or use defaults
let quotes = JSON.parse(localStorage.getItem("quotes")) || [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Don’t let yesterday take up too much of today.", category: "Wisdom" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", category: "Inspiration" }
];

// Select DOM elements
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteBtn = document.getElementById("newQuote");
const quoteForm = document.getElementById("quoteForm");
const newQuoteText = document.getElementById("newQuoteText");
const newQuoteCategory = document.getElementById("newQuoteCategory");
const message = document.getElementById("message");

// Show random quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteDisplay.innerHTML = `"${quote.text}" <br><em>— ${quote.category}</em>`;
}

// Add new quote
function addQuote(e) {
  e.preventDefault(); // prevent page reload

  const text = newQuoteText.value.trim();
  const category = newQuoteCategory.value.trim();

  if (!text || !category) {
    showMessage("Please enter both a quote and a category!", "error");
    return;
  }

  // Prevent duplicate quotes
  if (quotes.some(q => q.text.toLowerCase() === text.toLowerCase())) {
    showMessage("⚠️ This quote already exists!", "error");
    return;
  }

  // Add to quotes array
  quotes.push({ text, category });

  // Save to localStorage
  localStorage.setItem("quotes", JSON.stringify(quotes));

  // Update display
  quoteDisplay.innerHTML = `✅ New quote added: "${text}" <br><em>— ${category}</em>`;

  // Show success message
  showMessage("Quote added successfully!", "success");

  // Clear inputs
  newQuoteText.value = "";
  newQuoteCategory.value = "";
}

// Show feedback message
function showMessage(msg, type) {
  message.textContent = msg;
  message.className = type;
  setTimeout(() => { message.textContent = ""; }, 3000);
}

// Event listeners
newQuoteBtn.addEventListener("click", showRandomQuote);
quoteForm.addEventListener("submit", addQuote);
