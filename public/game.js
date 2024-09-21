let startTime;
const button = document.getElementById('gameButton');
const instruction = document.getElementById('instruction');

button.addEventListener('click', () => {
    button.style.backgroundColor = 'red';
    instruction.innerText = 'Wait for green...';
    
    const delay = Math.floor(Math.random() * 20000) + 1000; // 1 to 20 seconds
    setTimeout(() => {
        button.style.backgroundColor = 'green';
        instruction.innerText = 'Click now!';
        startTime = Date.now();
    }, delay);
});

button.addEventListener('click', () => {
    if (button.style.backgroundColor === 'green') {
        const reactionTime = Date.now() - startTime;

        fetch('/record-reaction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ reactionTime })
        })
        .then(response => response.json())
        .then(data => {
            alert(`Your reaction time was ${reactionTime} milliseconds!`);
            // Optionally, redirect or reset the game
        });
    }
});
