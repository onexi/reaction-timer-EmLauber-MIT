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
