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
    res.json({ userId, username: name });
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

// Endpoint to get leaderboard data
app.get('/leaderboard', (req, res) => {
    // Gather all reaction times from all users
    const leaderboard = [];
    for (const userId in users) {
        const { name, reactionTimes } = users[userId];
        reactionTimes.forEach(time => {
            leaderboard.push({ name, reactionTime: time });
        });
    }

    // Sort by reaction time (ascending)
    leaderboard.sort((a, b) => a.reactionTime - b.reactionTime);

    res.json(leaderboard);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
