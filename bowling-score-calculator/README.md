# Bowling Score Calculator

This is a Bowling Score Calculator application that provides a frontend user interface for calculating and tracking scores in a game of bowling. The application consists of both frontend and backend components to handle the logic and display of the scores.

## Features

- **Calculator Service** (Backend): The backend component of the application provides a `calculate` function that takes the current roll and historic rolls as input parameters. It calculates the scores based on the provided rolls and returns the updated scores.

- **User Interface** (Frontend): The frontend component allows users to input bowling values and displays the scorecard and overall score. The user interface provides an intuitive way to track the progress of the game and view the scores.

- **Stateless Component** (Frontend): The frontend component includes at least one stateless component, which improves code organization and reusability by separating logic from presentation.

## Backend Implementation

The backend logic is implemented in JavaScript in the `BowlingCalculator.js` file. It consists of a `calculate` function that takes the current roll and historic rolls as arguments and returns the updated scores.

The `calculate` function follows a set of rules to calculate the scores. It considers factors such as strikes, spares, and frame boundaries to ensure accurate scoring. The implementation references the rules and scoring systems commonly used in the game of bowling.

### Understanding the Backend Code

To understand the backend implementation, let's break down the `calculate` function:

```javascript
function calculate(currentRoll, historicRolls) {
  // Logic for calculating scores based on the current roll and historic rolls
  // ...
  // Return the updated scores
  return updatedScores;
}
```
The calculate function takes the current roll and historic rolls as input parameters. It uses these rolls to calculate the updated scores based on the scoring rules of bowling.

To ensure accuracy, the function considers various scenarios such as strikes, spares, and frame boundaries. By analyzing the current roll and historic rolls, it determines the scores for each frame and returns the updated scores.

For a comprehensive understanding of the backend implementation, refer to the following resources:
- [Bowling Scoring Rules](https://www.google.com/search?q=bowling+scoring+rules) - This resource provides detailed explanations of the scoring rules used in bowling games.

## Frontend Implementation
The frontend of the application is implemented using React, a popular JavaScript library for building user interfaces. The main component, BowlingCalculator, renders the user interface and handles user interactions.

### Understanding the Frontend Code
To understand the frontend implementation, let's break down the BowlingCalculator component:
```
const BowlingCalculator = () => {
  // State variables and their initial values
  // ...

  // Event handlers and helper functions
  // ...

  return (
    // JSX code for rendering the user interface
    // ...
  );
};
```
The BowlingCalculator component is the main component responsible for rendering the user interface and handling user interactions. It utilizes React's functional component syntax.

Inside the component, there are state variables that hold the current state of the game, such as the rolls, frame index, current roll index, and game over status. These variables are updated based on user interactions and backend calculations.

The component also includes event handlers and helper functions that are responsible for updating the state variables and performing calculations based on user actions.

The JSX code inside the return statement defines the structure and layout of the user interface. It includes elements such as scorecards, input fields, buttons, and overall score display.

For a deeper understanding of the frontend implementation, consider referring to the following resources:

- [React Documentation](https://reactjs.org/docs) - The official documentation of React provides detailed explanations and examples of building user interfaces using React.

- [React Hooks](https://reactjs.org/docs/hooks-intro.html) - This guide explains how to use React Hooks, such as `useState`, which are used in the `BowlingCalculator` component to manage state.

- [JSX](https://reactjs.org/docs/introducing-jsx.html) - JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code. This guide introduces JSX and explains its usage in React components.

## Getting Started
To use the Bowling Score Calculator, follow these steps:

Clone the repository: git clone https://github.com/your-username/bowling-score-calculator.git
Install dependencies: npm install
Start the development server: npm start
Open the application in your browser at http://localhost:3000
Feel free to explore the codebase, make modifications, and customize the styling according to your preferences.
## Future implementations
To implement a two-player mode in the Bowling Calculator, several modifications can be made to the existing code:

- **Separate Input Areas:** Create separate input areas for Player 1 and Player 2 in the frontend. Each player should have their own set of buttons to input the number of pins knocked down in each roll. Modify the handleRollClick function to handle the rolls for each player separately based on the current player's turn.

- **Player Switching:** Implement a mechanism to switch between players after each roll. Use a variable to keep track of the current player. After Player 1 completes their turn (e.g., two rolls in a frame), switch the control to Player 2, and vice versa. Update the currentFrameIndex and currentRoll states accordingly.

- **Score Tracking:** Adjust the scorecard to display scores for both Player 1 and Player 2. Create separate sections or columns to show the frames, rolls, and scores for each player. Modify the calculateOverallScore function to calculate the scores for both players based on their respective rolls.

- **Game Over Handling:** Implement game over conditions for both players. For example, if either Player 1 or Player 2 completes all frames and rolls, set the gameOver state to true for both players. This will disable further input and display the final scores for each player.

By incorporating these modifications, the Bowling Calculator can provide a two-player mode where each player can take turns, enter their rolls, and view their individual scores in a friendly competition.

## Code explanations
This code is a React component called `BowlingCalculator`, which implements a simple bowling score calculator. It allows users to input the number of pins knocked down in each roll of a bowling game and displays the scorecard with the calculated scores.

Let's break down the code and explain its functionality in detail:

1. Import Statements:
```javascript
import React, { useState } from 'react';
import './BowlingCalculator.css';
```
The code imports the necessary dependencies, including React and the `useState` hook for managing state within the component. It also imports a CSS file for styling the calculator.

2. Functional Component Declaration:
```javascript
const BowlingCalculator = () => {
  // Component implementation goes here
};
```
The `BowlingCalculator` function is a functional component that represents the bowling score calculator. It contains the entire logic and JSX (HTML-like syntax) for rendering the calculator.

3. State Initialization:
```javascript
const [frames, setFrames] = useState(Array(10).fill([null, null]));
const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
const [currentRoll, setCurrentRoll] = useState(0);
const [gameOver, setGameOver] = useState(false);
```
The component uses the `useState` hook to manage its state. It initializes several state variables:
- `frames` represents an array of frames, where each frame is an array of two elements (representing the number of pins knocked down in each roll of the frame). It is initialized with 10 frames, each containing `[null, null]` (indicating that no pins have been knocked down yet).
- `currentFrameIndex` represents the index of the current frame being played.
- `currentRoll` represents the current roll within the current frame.
- `gameOver` is a boolean variable indicating whether the game is over or not.

4. Event Handler: `handleRollClick`
```javascript
const handleRollClick = (pins) => {
  // Event handling logic goes here
};
```
The `handleRollClick` function is called when a user clicks on a pin button to register a roll. It takes the number of pins knocked down as an argument and performs various logic to update the state and calculate scores.

5. Updating Frames State:
```javascript
setFrames((prevFrames) => {
  const updatedFrames = [...prevFrames];
  const frameCopy = [...updatedFrames[currentFrameIndex]];
  frameCopy[currentRoll] = pins;
  updatedFrames[currentFrameIndex] = frameCopy;
  return updatedFrames;
});
```
This code block updates the `frames` state when a roll is made. It uses the `setFrames` function, which takes a callback and returns the updated state. It creates a copy of the `frames` array, updates the pins value for the current roll in the current frame, and then sets the updated frame back into the copied array.

6. Advancing to Next Frame/Roll:
```javascript
// Handle logic for advancing to the next frame or roll
// Code omitted for brevity
```
This block of code handles the logic for advancing to the next frame or roll based on the current state of the game. It determines whether the game is over or if the current frame/roll combination should change and updates the `currentFrameIndex` and `currentRoll` accordingly.

7. Rendering Roll:
```javascript
const renderRoll = (roll) => {
  // Logic for rendering the roll value
};
```
The `renderRoll` function takes a roll value as an argument and returns a string representation of the roll. It handles cases for strikes, null (no pins knocked down), and regular roll values.

8. Calculating Frame Score:
```javascript
const

 calculateFrameScore = (frameIndex) => {
  // Logic for calculating the score of a frame
};
```
The `calculateFrameScore` function takes a `frameIndex` as an argument and calculates the score for that frame. It considers different scenarios such as strikes, spares, and regular rolls to determine the frame's score.

9. Calculating Overall Score:
```javascript
const calculateOverallScore = () => {
  // Logic for calculating the overall score
};
```
The `calculateOverallScore` function calculates the overall score for the entire game by iterating over each frame and summing up the individual frame scores. It also handles the special case of a perfect game (all strikes) and returns the final score.

10. Resetting the Game:
```javascript
const resetGame = () => {
  // Resetting the state variables to their initial values
};
```
The `resetGame` function is called when the "Reset Game" button is clicked. It resets all the state variables to their initial values, effectively restarting the game.

11. JSX Rendering:
The return statement in the component's function body contains JSX code that describes the structure and layout of the bowling score calculator. It uses various CSS classes to style different elements of the calculator and renders the scorecard, overall score, pin buttons, and the reset button.

The `frames.map` function is used to iterate over each frame in the `frames` array and render the individual frame elements with their respective roll values.

12. Exporting the Component:
```javascript
export default BowlingCalculator;
```
The component is exported as the default export, allowing it to be imported and used in other parts of the application.

Overall, this code implements a basic bowling score calculator using React. It manages the state of the game, handles roll input, calculates scores for frames and the overall game, and provides a user interface to interact with the calculator.
## Conclusion
The Bowling Score Calculator provides a user-friendly interface to calculate and track bowling scores. With a well-structured backend and a thoughtfully designed frontend, this application offers an efficient way to enjoy and analyze bowling games.