// components/InformationSection.js

import React from 'react';

const InformationSection = () => {
  return (
    <div className="information-section bg-white text-gray-700 mt-8 py-8 px-20 shadow-md">
      <h2 className='font-bold text-5xl pb-5'>What is the Pomodoro Technique?</h2>
      <p className='text-lg'>
        The Pomodoro Technique is a time management method that uses a timer to
        break down work into focused intervals, separated by short breaks. This
        technique can help you improve your focus, productivity, and avoid
        burnout.
      </p>
      <h3 className='font-bold text-3xl py-5'>
        Here's a basic overview of the Pomodoro Technique:
      </h3>
      <ol className='text-lg'>
        <li>Choose a task to work on.</li>
        <li>Set the timer for 25 minutes (or your chosen duration).</li>
        <li>Work on the task until the timer rings.</li>
        <li>Take a short break (ideally 5 minutes).</li>
        <li>Repeat steps 1-4 for four cycles.</li>
        <li>After four cycles, take a longer break (ideally 15-30 minutes).</li>
      </ol>
    </div>
  );
};

export default InformationSection;
