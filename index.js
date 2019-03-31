const express = require('express');
const rateLimit = require("express-rate-limit");
const {
      randomQuote,
      allQuotes,
      randomQuotes,
      numOfQuotes
} = require('./handlers');
const app = express();

const limiter = rateLimit({
      windowMs: 10 * 60 * 1000, // 10 minutes
      max: 100, // limit each IP to 100 requests per windowMs
      message: "Too many requests in too small time. Chill. Take a walk or something idk."
});

app.enable("trust proxy");
app.set('view engine', 'ejs');
app.set('json spaces', 4);
app.use(limiter);

app.get('/', (req, res) => {
      res.render('index', {amount: numOfQuotes()})
})

app.get('/random', (req, res) => {
      res.json(randomQuote())
})

app.get('/random/:amount', (req, res) => {
      res.json(randomQuotes(req.params.amount))
})

app.get('/all', (req, res) => {
      res.json(allQuotes())
})

// Preparing for Heroku
port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server listening on port ${port}!`));