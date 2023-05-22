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
#### State Initialization:
```
const [frames, setFrames] = useState(Array(10).fill([null, null]));
const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
const [currentRoll, setCurrentRoll] = useState(0);
const [gameOver, setGameOver] = useState(false);
```
- The frames state holds an array of frames, where each frame is represented by an array with two elements for storing the roll scores.
- The currentFrameIndex state keeps track of the index of the current frame.
- The currentRoll state tracks the current roll within the current frame.
- The gameOver state indicates whether the game has ended.
#### Handle Roll Click:
```
const handleRollClick = (pins) => {
  // ...
};
```
This function is called when a pin button is clicked. It handles the logic for updating the frames, current frame index, current roll, and checking for game over conditions.

#### Render Roll:
```
const renderRoll = (roll) => {
  // ...
};
```
This function takes a roll score and returns a string representation for rendering purposes. It returns "Strike" for a score of 10, "-" for a null value, or the actual score for other values.

#### Calculate Frame Score:
```
const calculateFrameScore = (frameIndex) => {
  // ...
};
```
This function calculates the score for a specific frame based on the frame index. It considers strike and spare cases to calculate the score accordingly.

#### Calculate Overall Score:
```
const calculateOverallScore = () => {
  // ...
};
```
This function calculates the overall score by iterating over all frames and calling the calculateFrameScore function for each frame.

#### Reset Game:
```
const resetGame = () => {
  // ...
};
```
This function resets the game state by initializing frames, current frame index, current roll, and game over status.

#### Component Render:
The return statement renders the JSX structure of the component. It consists of HTML elements and React components that display the bowling score calculator.
The code includes a container with a heading, a scorecard that displays each frame and its rolls, the overall score, and an input container with pin buttons and a reset button.

Overall, the code represents a basic implementation of a bowling score calculator using React.
## Conclusion
The Bowling Score Calculator provides a user-friendly interface to calculate and track bowling scores. With a well-structured backend and a thoughtfully designed frontend, this application offers an efficient way to enjoy and analyze bowling games.
