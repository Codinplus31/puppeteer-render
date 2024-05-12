const express = require("express");
const { scrapeLogic } = require("./scrapeLogic");
const app = express();
const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({
  auth: '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'
});
const PORT = process.env.PORT || 4000;

app.get("/scrape", (req, res) => {
  scrapeLogic(res);
});

app.get("/", (req, res) => {
  res.send("Render Puppeteer server is up and running!");
});
app.get("/check", (req, res) => {
  const owner = 'Codinplus31';
const repo = 'puppeteer-render';
const branch = 'main';
const path = 'check.txt';
const message = 'Update check.txt';
const content = Buffer.from('New content').toString('base64');
const sha = ''; // Set this if you want to update an existing file

octokit.repos.createOrUpdateFileContents({
  owner,
  repo,
  path,
  branch,
  message,
  content,
  sha
}).then(response => {
  console.log('File updated successfully:', response.data);
   res.send('File updated successfully:'+ response.data);
}).catch(error => {
  console.error('Error updating file:', error);
});
  res.send("Render Puppeteer server is up and running!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
