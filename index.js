const express = require("express");
const axios = require("axios");
const { scrapeLogic } = require("./scrapeLogic");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("server is up and running!");
});
app.get('/scrape',(req, res)=>{
  scrapeLogic(req, res)
})
app.get("/check", (req, res) => {
 const axios = require('axios');

axios.get('https://app.scrapingbee.com/api/v1', {
    params: {
        'api_key': 'RRC2WHFNTJLNVX7WNSU4YLRGF5CEDLBYZ9CXBFNPAQ4YG4YJ7W79DPF3DZ88EP0B7701J8NWRLYU9WY5',
        'url': 'https://watchoutmovies.vercel.app',
    }
}).then(function (response) {
    // handle success
    res.send(response);
})
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
