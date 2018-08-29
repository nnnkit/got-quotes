const allQuotes = require('./got-quotes.json');

const quotes = allQuotes.quotes;
function randomQuote() {
  var randomIndex = Math.floor(Math.random()* quotes.length);
  return quotes[randomIndex];
}
module.exports = {
  all: quotes,
  random: randomQuote
};