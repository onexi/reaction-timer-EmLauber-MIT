const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

let users = {};
let userIdCounter = 0;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

app.post('/start-game', (req, res) => {
    const userId = ++userIdCounter;
    const name = req.body.name;
    users[userId] = { name, reactionTimes: [] };
    res.json({ userId });
});

// Serve game.html
app.get('/game', (req, res) => {
    const userId = req.query.userId;
    if (users[userId]) {
        res.sendFile(path.join(__dirname, 'public', 'game.html'));
    } else {
        res.status(404).send('User not found');
    }
});

app.post('/record-reaction', (req, res) => {
    const { userId, reactionTime } = req.body;
    if (users[userId]) {
        users[userId].reactionTimes.push(reactionTime);
    }
    res.json({ message: 'Reaction time recorded!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
