const quotes = require('./quotes/quotes.json')

function randomQuote() {
    let quoteObj = quotes[Math.floor(Math.random() * quotes.length)];
    let quoteString = JSON.stringify(quoteObj);
    return quoteString;
}

function randomQuotes(n) {
    var data = [];
    var quotesCopy = quotes.slice();
    amount = Number(n);
    if (amount > quotes.length) {
        return {"error": "Specified number exceeds number of quotes. Total number of quotes right now are " + String(quotes.length)};
    }
    else if (amount < 1 || !Number.isInteger(amount)) {
        return {"error": "Are you retarded?"};
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