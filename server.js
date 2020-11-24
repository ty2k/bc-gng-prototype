require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const servicesData = require('./services.json');
const PORT = process.env.PORT || 8080;
const GUEST_USERNAME = process.env.GUEST_USERNAME;
const GUEST_PASSWORD = process.env.GUEST_PASSWORD;

// Use React's build directory as static mount point
app.use(express.static(path.join(__dirname, 'react-app', 'build')));

// Use body-parser JSON middleware for decoding API request bodies
app.use(bodyParser.json());

// API route to serve Services data to React client
app.get('/api/services', function(req, res) {
  res.json(servicesData);
});

app.post('/api/login', function(req, res) {
  if (req.body &&
      req.body.username === GUEST_USERNAME &&
      req.body.password === GUEST_PASSWORD) {
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
