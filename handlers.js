const quotes = require('./quotes/quotes.js');

function randomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function randomQuotes(n) {
    var data = [];
    var quotesCopy = quotes.slice();
    amount = Number(n);
    if (amount > quotes.length) {
        return {"error": "Specified number exceeds number of quotes. Total number of quotes right now are " + String(quotes.length)};
    }
    else if (amount < 1 || !Number.isInteger(amount)) {
        return {"error": "Invalid number"};
    }
    else {   
        while (data.length < amount) {
            let index = Math.floor(Math.random() * quotesCopy.length);
            data.push(quotesCopy[index]);
            quotesCopy.splice(index, 1);
        }
        return data;
    }
}

function allQuotes() {
    return quotes;
}

function numOfQuotes() {
    return quotes.length;
}

module.exports = {
    randomQuote,
    allQuotes,
    randomQuotes,
    numOfQuotes
};
