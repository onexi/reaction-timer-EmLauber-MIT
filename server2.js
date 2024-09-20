// Here we store the web page un public directory and serve it using express.static.
const express = require('express');
const bodyParser = require('body-parser');
const escape = require('escape-html');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Array to store names and emails
let users = [];

// Serve the web page with the form
// note __dirname is the directory in which node Web Server is running 
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// Handle the form submission via fetch
app.post('/submit-name', function(req, res){
    const name = escape(req.body.name);
    const email = escape(req.body.email);

    // Add the new user to the array
    users.push({ Name: name, Email: email });

    // Send the updated list of users back as JSON
    res.json({ success: true, users: users };
});

// Serve the game page
app.get('/game.html', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'game.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
