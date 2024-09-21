   // Get the query parameters from the URL
   const urlParams = new URLSearchParams(window.location.search);
   const username = urlParams.get('username'); // Get the username
   
   // Display the welcome message
   //if (username) {
    //   document.getElementById('welcomeMessage').innerText = `Get Ready, ${username}!`;
   //}
       
       let greenTime;
       let intervalId;
   
       function startGame() {
           const button = document.getElementById('reactionButton');
           button.classList.remove('blue-button');
           button.classList.add('red-button')
           button.textContent = 'Wait for Green!';
           
       }
   
           function changeButtonColor() {
           const button = document.getElementById('reactionButton');
           button.classList.remove('red-button');
           button.classList.add('green-button')
           button.textContent = 'Go!';
           greenTime = new Date().getTime(); // Record the time when the button turns green
       }
   
       function setRandomInterval() {
           // const randomTime = Math.floor(Math.random() * 15000); // Random time less than 15 seconds
           const randomTime = Math.floor(Math.random() * 5000); // Random time less than 5 seconds
   
   
           setTimeout(() => {
               changeButtonColor();
               setRandomInterval(); // Set the next interval TODO: figure out if / why this works
           }, randomTime);
        }
   
       document.getElementById('reactionButton').addEventListener('click', function() {
           if (this.classList.contains('blue-button')) {
               startGame();
               setRandomInterval(); // Start the first interval
           }
           if (this.classList.contains('green-button')) {
               const reactionTime = new Date().getTime() - greenTime;
               //alert('Reaction Time: ' + reactionTime + ' ms');
               
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
               // Redirect to the index page after the alert is dismissed
            window.location.href = '/';
           });
               
           }
           
           clearTimeout(intervalId); // Stop the current interval
       });
       
       // document.getElementById('reactionButton').textContent = 'Wait for Green';
       // setRandomInterval(); // Start the first interval