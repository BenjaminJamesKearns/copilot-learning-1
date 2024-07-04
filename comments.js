// Create web server
const express = require('express');
const app = express();
const port = 3000;

// For parsing POST request
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Import comments.js file
const comments = require('./comments.js');

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});