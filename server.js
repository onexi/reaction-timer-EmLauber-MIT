// This will be the node Express server that will serve up your app
const express = require('express');
const bodyParser = require('body-parser');
const escape = require('escape-html');
const app = express();
const port = 3000;
const path = require('path');
console.log(port)

// these are some of the libraries you will need

// Here we store the web page un public directory and serve it using express.static.

//app.post('/record-reaction-time', (req, res) => {
    //const { reactionTime } = req.body;
    //console.log(`Reaction Time: ${reactionTime} ms`);
    //res.sendStatus(200);
// });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


// Array to store names and times
//let users = [];

//app.use(bodyParser.json());
//app.use(express.static('public'));

// Serve the web page with the form
// note __dirname is the directory in which node Web Server is running 
// app.get('/', function(req, res) {
  //  res.sendFile(__dirname + '/public/index.html');
//});

// Handle the form submission via fetch
// app.post('/input', function(req, res){
   // const name = escape(req.body.name);
    // const email = escape(req.body.email);

    // Add the new user to the array
 //   users.push({ name: name, email: email });

    // Send the updated list of users back as JSON
   // res.json(users);
// });

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});