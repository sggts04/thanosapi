# Thanos Quotes API!

Built using ExpressJS framework in NodeJS.

## Endpoints:

### Grab a random Thanos quote!
[https://thanosapi.herokuapp.com/random/](https://thanosapi.herokuapp.com/random/)

### Grab a specified number of random Thanos quotes!
[https://thanosapi.herokuapp.com/random/&lt;integer&gt;/](https://thanosapi.herokuapp.com/random/5/)

### Grab all Thanos quotes!
[https://thanosapi.herokuapp.com/all/](https://thanosapi.herokuapp.com/all/)

## How these quotes were collected

Googled thanos quotes and wrote a python script through which I could just input a quote and it will automatically form json with correct id and append it to the quotes file.

## Make a contribution!

Would love to make the api better and more efficient if someone is willing to help. Also if I missed a thanos quote or maybe Endgame has released and I haven't updated this, submit a Pull Request, with the quote added to the quotes/quotes.json file. Make sure the quote is in this format:

```javascript
{
  "id": <last joke id + 1>,
  "quote": "<the quote>"
}
```

## Run Locally
* Clone the repo
* `npm install`
* `npm start`
* Visit `localhost:3000` on your browser!