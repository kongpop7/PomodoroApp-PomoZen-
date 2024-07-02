// components/Timer.js
"use client";
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [selectedDuration, setSelectedDuration] = useState(25); // Initial duration
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(selectedDuration * 60);
  const [lastClickedButton, setLastClickedButton] = useState(25);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isTimerRunning && remainingSeconds > 0) {
        setRemainingSeconds((prev) => prev - 1);
      } else if (remainingSeconds === 0) {
        clearInterval(intervalId);
        // Handle timer ending (play a sound, display a message)
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isTimerRunning, remainingSeconds]);

  const handleDurationChange = (newDuration) => {
    setSelectedDuration(newDuration);
    setRemainingSeconds(newDuration * 60); // Reset remaining seconds based on new duration
    setLastClickedButton(newDuration);
    setIsTimerRunning(false); // Stop the timer when duration changes
  };

  const handleToggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Calculate the percentage of time elapsed for the loading bar
  const getElapsedPercentage = () => {
    return ((selectedDuration * 60 - remainingSeconds) / (selectedDuration * 60)) * 100;
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen p-8">
      <div className="absolute top-0 left-0 w-full h-full bg-black">
        <div
          className="h-full bg-yellow-500"
          style={{ width: `${getElapsedPercentage()}%` }}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center p-8 mt-24">
        <div>
          <button
            id="duration25"
            name="duration"
            value={25}
            className={`px-3 font-bold text-3xl ${
              lastClickedButton === 25 ? 'underline underline-offset-8' : 'text-white'
            }`}
            onClick={() => handleDurationChange(25)}
          >
            Focus
          </button>
          <button
            id="duration5"
            name="duration"
            value={5}
            className={`px-3 font-bold text-3xl ${
              lastClickedButton === 5 ? 'underline underline-offset-8' : ''
            }`}
            onClick={() => handleDurationChange(5)}
          >
            Break
          </button>
        </div>
        <h1 className="font-bold p-2 text-[256px] flex flex-row justify-center">{formatTime(remainingSeconds)}</h1>
        {/* <h2 className="p-3 flex flex-col items-center">Select Duration</h2> */}
        <div className="flex flex-row justify-center mt-4">
          <button
            onClick={handleToggleTimer}
            className={`text-white hover:bg-white hover:text-black font-medium rounded-full text-5xl px-24 py-11 text-center justify-center border ${
              isTimerRunning ? "bg-red hover:bg-black hover:text-black" : ""
            }`}
          >
            {isTimerRunning ? "Stop" : "Start"}
          </button>
          {/* <button
            onClick={handleReset}
            className="text-white bg-gray-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center"
          >
            Reset
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Timer;
