document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;

    fetch('/start-game', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: username })
    })
    .then(response => response.json())
    .then(data => {
        window.location.href = `/game?userId=${data.userId}`;
    });
});

function loadLeaderboard() {
    fetch('/leaderboard')
    .then(response => response.json())
    .then(data => {
        const leaderboardContainer = document.getElementById('leaderboard');
        leaderboardContainer.innerHTML = '<h2>Leaderboard</h2>';
        data.forEach((entry, index) => {
            const entryElement = document.createElement('p');
            entryElement.textContent = `${index + 1}. ${entry.name}: ${entry.reactionTime} ms`;
            leaderboardContainer.appendChild(entryElement);
        });
    });
}

// Load the leaderboard when the page loads
window.onload = function() {
    loadLeaderboard();
};
