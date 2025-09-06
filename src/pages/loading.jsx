import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin mb-6"></div>

      {/* Loading Text */}
      <p className="text-lg text-gray-700">Loading, please wait...</p>
    </div>
  );
};

export default Loading;
