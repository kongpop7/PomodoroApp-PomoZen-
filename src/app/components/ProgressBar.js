import React from 'react';

const ProgressBar = ({ progress, totalDuration }) => {
  // Calculate the progress percentage (0 to 100)
  const percentage = Math.max(0, Math.min(100, (progress / totalDuration) * 100));

  return (
    <div className="h-2 rounded-full overflow-hidden bg-gray-200">  {/* Base styles */}
      <div
        className={`w-${percentage}% h-full bg-blue-500 rounded-full transition-width ease-in-out duration-100`}
      /> {/* Progress fill */}
      
    </div>
  );
};

export default ProgressBar;
