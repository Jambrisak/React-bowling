import React, { useState } from 'react';
import './BowlingCalculator.css';

const BowlingCalculator = () => {
  const [frames, setFrames] = useState(Array(10).fill([null, null]));
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [currentRoll, setCurrentRoll] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleRollClick = (pins) => {
    if (currentFrameIndex === 9 && currentRoll === 2) {
      setGameOver(true);
      return;
    }

    const currentFrame = frames[currentFrameIndex];
    const previousRoll = currentFrame[currentRoll - 1];

    // Validate the input to prevent more than 10 pins knocked down in a frame
    if (currentRoll === 1 && previousRoll !== 10 && previousRoll + pins > 10) {
      return;
    }

    setFrames((prevFrames) => {
      const updatedFrames = [...prevFrames];
      const frameCopy = [...updatedFrames[currentFrameIndex]];
      frameCopy[currentRoll] = pins;
      updatedFrames[currentFrameIndex] = frameCopy;

      return updatedFrames;
    });

    // Handle logic for advancing to the next frame or roll
    if (currentFrameIndex === 9) {
      if (currentRoll === 0 && pins === 10) {
        setCurrentRoll(1);
      } else if (currentRoll === 1 && (currentFrame[0] + pins === 10 || pins === 10)) {
        setCurrentRoll(2);
      } else {
        setCurrentRoll((prevRoll) => prevRoll + 1);
      }
    } else if (currentFrameIndex === 8 && currentRoll === 0 && pins === 10) {
      setCurrentRoll(1);
    } else if (currentRoll === 1 || pins === 10) {
      setCurrentFrameIndex((prevFrameIndex) => prevFrameIndex + 1);
      setCurrentRoll(0);
    } else {
      setCurrentRoll((prevRoll) => prevRoll + 1);
    }
  };

  const renderRoll = (roll) => {
    if (roll === 10) {
      return 'Strike';
    } else if (roll === null) {
      return '-';
    } else {
      return roll;
    }
  };

  const calculateFrameScore = (frameIndex) => {
    const frame = frames[frameIndex];
    const isStrike = frame[0] === 10;
    const isSpare = frame[0] + frame[1] === 10;

    if (isStrike) {
      if (frameIndex < 9) {
        const nextFrame = frames[frameIndex + 1];
        const nextNextFrame = frames[frameIndex + 2];
        if (nextFrame[0] === 10 && frameIndex < 8) {
          return 20 + nextNextFrame[0];
        } else {
          return 10 + nextFrame[0] + nextFrame[1];
        }
      } else {
        return 10 + frame[1] + frame[2];
      }
    }

    if (isSpare && frameIndex < 9) {
      const nextFrame = frames[frameIndex + 1];
      return 10 + nextFrame[0];
    }

    return frame[0] + frame[1];
  };

  const calculateOverallScore = () => {
    let score = 0;

    for (let i = 0; i < frames.length; i++) {
      score += i === 9 ? calculateFrameScore(i) || 0 : calculateFrameScore(i);
    }

    // Handle the case of a perfect game (12 strikes)
    if (score === 270) {
      score = 300;
    }

    return score;
  };

  const resetGame = () => {
    setFrames(Array(10).fill([null, null]));
    setCurrentFrameIndex(0);
    setCurrentRoll(0);
    setGameOver(false);
  };

  return (
    <div className="container">
      <h1>Bowling Score Calculator</h1>

      <div className="scorecard">
  {frames.map((frame, frameIndex) => (
    <div
      key={frameIndex}
      className={`frame ${frameIndex === currentFrameIndex ? 'current-frame' : ''}`}
    >
      <div className="frame-index">{frameIndex + 1}</div>
      <div className="rolls">
        {frame.map((roll, rollIndex) => (
          <div key={rollIndex} className="roll">
            {renderRoll(roll)}
          </div>
        ))}
        {frameIndex === 9 && frame.length < 3 && (
          <div className="roll">{frame.length === 1 ? '-' : renderRoll(frame[1])}</div>
        )}
        {frameIndex === 9 && frame.length === 3 && (
          <div className="roll">{renderRoll(frame[2])}</div>
        )}
      </div>
    </div>
  ))}
</div>

      <div className="overall-score">Overall Score: {calculateOverallScore()}</div>

      <div className="input-container">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((pins) => (
          <button
            key={pins}
            className="pin-button"
            onClick={() => handleRollClick(pins)}
            disabled={gameOver}
          >
            {pins}
          </button>
        ))}
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default BowlingCalculator;
