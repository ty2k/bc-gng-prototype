require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs/promises');
const bodyParser = require('body-parser');
const servicesData = require('./services.json');
const PORT = process.env.PORT || 8080;
const USER_PASS_PAIRS = process.env.USER_PASS_PAIRS;

// Split USER_PASS_PAIRS env var into valid credentials
const credsArr = USER_PASS_PAIRS.split(',');
const credsObj = {};
credsArr.forEach((userPassStr) => {
  const userPassArr = userPassStr.split('|');
  credsObj[userPassArr[0]] = userPassArr[1];
})

// Use React's build directory as static mount point
app.use(express.static(path.join(__dirname, 'react-app', 'build')));

// Use body-parser JSON middleware for decoding API request bodies
app.use(bodyParser.json());

// API route to serve Services data to React client
app.get('/api/services', function(req, res) {
  res.json(servicesData);
});

// API route to serve Search data to React client
app.get('/api/search', function(req, res) {
  const userQuery = req.query.q;

  // Check for poison null byte in query
  if (userQuery.indexOf('\0') !== -1) {
    // If a poison null byte is present in the query, return no results
    res.sendFile(path.join(__dirname, 'data', 'search', 'xml', 'default-no-results.xml'));
  } else {
    // Avoid path traversal by removing unescaped traversal characters
    const safeQuery = path.normalize(userQuery).replace(/^(\.\.(\/|\\|$))+/, '');
    const safePath = path.join(__dirname, 'data', 'search', 'xml', safeQuery + '.xml');

    // Check if we have data for the query by
    // attempting to open XML file in read mode
    fs.open(safePath, 'r')
      .then((xmlFileHandle) => {
        res.sendFile(safePath);

        // FileHandle must be closed manually
        xmlFileHandle.close();
      })
      .catch((err) => {
        if (err.code === 'ENOENT') {
          // No data file exists for the query, return no results
          res.sendFile(path.join(__dirname, 'data', 'search', 'xml', 'default-no-results.xml'));
        } else {
          console.log(err);
        }
      });
  }
});

app.post('/api/login', function(req, res) {
  if (req.body &&
      req.body.username in credsObj &&
      req.body.password === credsObj[req.body.username]) {
    console.log("Authenticated");
    res.json({ "username": req.body.username });
  } else {
    console.log("Rejected");
    res.sendStatus(401);
  }
});

// All non-API requests get served the React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'react-app', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}.`)
});
