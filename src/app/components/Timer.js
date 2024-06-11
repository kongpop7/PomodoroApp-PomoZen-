// components/Timer.js
"use client"
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [selectedDuration, setSelectedDuration] = useState(25); // Initial duration
  const [isStarted, setIsStarted] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(selectedDuration * 60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isStarted && remainingSeconds > 0) {
        setRemainingSeconds(remainingSeconds - 1);
      } else if (remainingSeconds === 0) {
        clearInterval(intervalId);
        // Handle timer ending (play a sound, display a message)
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isStarted, remainingSeconds]);

  const handleDurationChange = (event) => {
    setSelectedDuration(parseInt(event.target.value));
    setRemainingSeconds(parseInt(event.target.value) * 60); // Reset remaining seconds based on new duration
  };

  const handleStart = () => {
    setIsStarted(true);
  };

  const handlePause = () => {
    setIsStarted(false);
  };

  const handleReset = () => {
    setIsStarted(false);
    setRemainingSeconds(selectedDuration * 60);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer items-center justify-center p-8 rounded-lg shadow-md">
      <h1 className='font-bold p-2 text-7xl flex flex-row justify-center'>{formatTime(remainingSeconds)}</h1>
      <h2 className = 'p-3 flex flex-col items-center'>Select Duration</h2>
      <div >
        <input
          type="radio"
          id="duration25"
          name="duration"
          value={25}
          checked={selectedDuration === 25}
          onChange={handleDurationChange}
        />
        <label htmlFor="duration25" className='px-3'>25 minutes</label>
        <input
          type="radio"
          id="duration50"
          name="duration"
          value={50}
          checked={selectedDuration === 50}
          onChange={handleDurationChange}
        />
        <label htmlFor="duration50" className='px-3'>50 minutes</label>
        <input
          type="radio"
          id="duration5"
          name="duration"
          value={5}
          checked={selectedDuration === 5}
          onChange={handleDurationChange}
        />
        <label htmlFor="duration50" className='px-3'>5 minutes</label>
      </div>
      <div className='flex flex-row justify-center mt-4 space-x-4'>
        <button onClick={handleStart} disabled={isStarted} className = "text-white bg-gray-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center">
          Start
        </button>
        <button onClick={handlePause} disabled={!isStarted} className = "text-white bg-gray-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center">
          Pause
        </button>
        <button onClick={handleReset} className='text-white bg-gray-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center'>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
