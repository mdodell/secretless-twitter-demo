'use strict';

const express = require('express');
const path = require('path');
const request = require('request')

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build');

// App
const app = express();

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// Retrieves 5 tweets, but does not expose the credentials
app.get('/fetchWithSecretless', (req, res) => {
  res.set('Content-Type', 'application/json');
  request({
   url: 'http://api.twitter.com/1.1/search/tweets.json?q=from%3ACyberArk&result_type=mixed&count=5&tweet_mode=extended',
   proxy: 'http://host.docker.internal:8051'
}, function (error, response, body) {
   if (error) {
     throw new Error("There was an error fetching tweets!")
   } else {
     res.send(JSON.stringify(JSON.parse(body).statuses, null, 2));
   }
 });
});

// Retrieves 5 tweets, but exposes the credentials
app.get('/fetchWithoutSecretless', (req, res) => {
  res.set('Content-Type', 'application/json');
  request({
   url: 'https://api.twitter.com/1.1/search/tweets.json?q=from%3ACyberArk&result_type=mixed&count=5&tweet_mode=extended',
   headers: {
     'Authorization': `Bearer ${encodeURIComponent(req.query.twitter_token)}`
   }
}, function (error, response, body) {
   if (error) {
     throw new Error("There was an error fetching tweets!")
   } else {
     res.send(JSON.stringify(JSON.parse(body).statuses, null, 2));
   }
 });
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
