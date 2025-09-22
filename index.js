/**
 * @typedef Quote
 * @property {string} sentence
 * @property {string} author
 */

// === Constants ===
const NUM_QUOTES = 20;
const SENTENCES = [
  "The journey of a thousand miles begins with one step.",
  "Every sunrise brings with it a new chance to be the person you were meant to be.",
  "Rise above the clouds, and you'll see that the sky is not the limit, but the beginning.",
  "Success is not a destination; it's a well-planned detour.",
  "Don't chase dreams; walk beside them and let them guide you.",
];
const AUTHORS = [
  "Isabel Chang",
  "Clara Wyndham",
  "Agnes Woods",
  "Jasper Brown",
  "Samuel Kumar",
];

// === State ===
/** @returns {Quote} a quote with a random sentence and random author */
function makeQuote() {
  // TODO
}

const quotes = undefined; // TODO

// === Components ===
/**
 * A single card with a quote and its author
 * @param {Quote} quote
 */
function QuoteCard(quote) {
  // TODO
}

/** An article of many QuoteCards */
function QuoteCards() {
  // TODO
}

// === Render ===
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Inspirational Quotes</h1>
    <QuoteCards></QuoteCards>
  `;
  $app.querySelector("QuoteCards").replaceWith(QuoteCards(quotes));
}
render();
