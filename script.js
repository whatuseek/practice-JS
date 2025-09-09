// This is the code that should be in the index.js file.
// You no longer need the DOMContentLoaded listener here, because the script is loaded last.
// If you want to keep the listener, that's fine too.

let redDiv = document.getElementById("red");
// redDiv.style.backgroundColor = "yellow";
redDiv.onclick = () => console.log("You chose: 🪨 Rock");
// get computer choice👉 ' '
// userChoice vs computer choice👉 result
// lost:-1, draw:0, win:1
// show everything on screen

/* let greenDiv = document.getElementById("green");
greenDiv.onclick = () => console.log("You chose: 📃 Paper");
let blueDiv = document.getElementById("blue");
blueDiv.onclick = () => console.log("You chose: ✂️ Scissors"); */
// Instead of the previous commented line , we can achieve by using .forEach()
// ============================================================
// const squares = document.querySelectorAll('.colorSquare')
/* console.log(squares);
console.log("value is ", squares[0].value); */

/*  for each */
// squares.forEach(square => console.log(square.value))
// const timesClicked = { 'red': 0, 'green': 0, 'blue': 0 }
/* 
squares.forEach(square => {
    // square.onclick = () => console.log(square.innerHTML);
    square.onclick = () => {
        timesClicked[square.value] += 1
        // square.innerText=timesClicked[square.value] 
        const icon = square.value[0];

        // 3. Get the new count
        const count = timesClicked[square.value];

        // 4. Update the button's text to show BOTH the icon and the count
        square.innerText = `${icon} ${count}`;
        // console.log(square.value)
    };
}) */
/* 
const clearScores = () => {
    timesClicked.red = 0
    timesClicked.green = 0
    timesClicked.blue = 0
    squares.forEach(square => {
        square.innerText = 0
    })
}
const clearGameBtn = document.getElementById('clear-game')
clearGameBtn.onclick = () => clearScores() */

// ============================================================

// Get all the choice buttons
const squares = document.querySelectorAll('.colorSquare');

// Get the clear button
// 🚩 FIX 1: Use querySelector for a class, not getElementById
const clearGameBtn = document.querySelector('.clear-game');

// It's good practice to store the initial state so you can easily reset to it
const initialIcons = {
    red: '🪨',
    green: '📜',
    blue: '✂️'
};

// Store the scores
let timesClicked = { 'red': 0, 'green': 0, 'blue': 0  };

// Add click listeners to each choice button
squares.forEach(square => {
    square.onclick = () => {
        // Increment the score for the clicked button's value
        timesClicked[square.value] += 1;

        // Get the original icon for this button
        const icon = initialIcons[square.value];

        // Get the new count
        const count = timesClicked[square.value];

        // Update the button's text to show BOTH the icon and the count
        square.innerText = `${icon} ${count}`;
    };
});

// Function to clear scores and reset the display
const clearScores = () => {
    // Reset the scores in our JavaScript object
    timesClicked = { 'red': 0, 'green': 0, 'blue': 0 };

    // 🚩 FIX 2: Reset the text of each button back to its original emoji
    squares.forEach(square => {
        // Look up the original icon using the button's value ('red', 'green', 'blue')
        // and set it as the innerText.
        square.innerText = initialIcons[square.value];
    });
};

// Attach the clearScores function to the clear button's click event
clearGameBtn.onclick = () => clearScores();