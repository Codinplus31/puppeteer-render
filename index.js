const express = require("express");
// const { scrapeLogic } = require("./scrapeLogic");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("server is up and running!");
});

app.get("/check", (req, res) => {
 
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
