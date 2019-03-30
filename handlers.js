const quotes = require('./quotes/quotes.json')

function randomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function randomQuotes(n) {
    var indexes = [];
    var data = [];
    amount = Number(n);
    if (amount > quotes.length) {
        return {"error": "Specified number exceeds number of quotes. Total number of quotes right now are " + String(quotes.length)};
    }
    else if (amount < 1 || !Number.isInteger(amount)) {
        return {"error": "Are you retarded?"};
    }
    else {   
        while (indexes.length < amount) {
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
}

function allQuotes() {
    return quotes;
}

module.exports = {
    randomQuote,
    allQuotes,
    randomQuotes
};