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
        setRemainingSeconds(remainingSeconds - 1);
      } else if (remainingSeconds === 0) {
        clearInterval(intervalId);
        // Handle timer ending (play a sound, display a message)
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isTimerRunning, remainingSeconds]);

  const handleDurationChange = (newDuration) => {
    setSelectedDuration(parseInt(event.target.value));
    setRemainingSeconds(parseInt(event.target.value) * 60); // Reset remaining seconds based on new duration
    setLastClickedButton(newDuration);
  };

  const handleToggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  // const handleReset = () => {
  //   setIsTimerRunning(false);
  //   setRemainingSeconds(selectedDuration * 60);
  // };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer items-center justify-center p-8 rounded-lg shadow-md flex flex-col mt-36">
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
          id="duration25"
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
  );
};

export default Timer;
