## Assignment Requirements
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/e__G6ZpK)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=16023130)

# Em's High-Tech, Innovative Reaction Game

## Overview
The Reaction Game is a simple web-based game designed to test users' reaction times. Users are prompted to click a button when it turns green, and their reaction time is recorded. The application features a Leaderboard that displays the recorded reaction times by fastest to slowest.

## Features
- **User Registration**: Users enter their name to start the game.
- **Reaction Timing**: The game randomly changes the button color from red to green. Users must click the button as soon as it turns green.
- **Cheating Prevention**: If users click the button while it is still red, they are alerted with a "Cheater!" message and redirected to the main page.
- **Leaderboard**: After each reaction time is recorded, users can see their results displayed in a leaderboard format.

## Technologies Used
- **HTML**: For the structure of the web pages.
- **CSS**: For styling and layout.
- **JavaScript**: For game logic and handling user interactions.
- **Node.js with Express**: For server-side functionality to manage user data and record reaction times.

## File Structure
- index.html # Main page where users enter their names 
- game.html # Game interface where users play the reaction game 
- styles.css # Stylesheet for consistent design 
- script.js # Client-side JavaScript for managing user interactions 
- game.js # Game logic for handling reactions 
- server.js # Server-side code for handling requests and storing user data

The files are separated into different pages for user registration and game play. The dynamic code is separated into their own script files. A style sheet is added to stay consistent across pages. The goal of the separation was to easily more update files and limit the impact of changes. 

## Game Play
1. After the user submits their name in the form, they are redirected to the game page. 
2. The game page starts with a blue button asking the user if they want to start the game. 
3. Once the user clicks on the button, it changes to red and then randomly between 1-20 seconds, it changes to green.
    a. If the user clicks while the button is red, they are alerted as a "Cheater" and redirected back to the submission page.
b. If the user clicks while the button is green, the reaction time is saved back to the server tied to their userId. 
4. Once alerted with their reaction time or cheater status, the user can dismiss the alert and is redirected back to the homepage that shows the leaderboard and allows them to enter a new name to play again.

## Note
The leaderboard currently displays only during a single session. If the server restarts, all data will be lost since it uses in-memory storage.