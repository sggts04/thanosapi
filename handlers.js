const quotes = require('./quotes/quotes.json')

function randomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function randomFiveQuotes() {
    var indexes = [];
    var data = [];
    while (indexes.length < 5) {
        let index = Math.floor(Math.random() * quotes.length);
        if (indexes.includes(index)) {
            continue;
        } else {
            indexes.push(index);
            data.push(quotes[index]);
        }
    }
    return data;
}

function allQuotes() {
    return quotes;
}

module.exports = {
    randomQuote,
    allQuotes,
    randomFiveQuotes
};