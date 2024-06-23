// pages/index.tsx
import React from 'react';
import '../app/globals.css'

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center p-4">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">{`Prateek Uniyal's Portfolio`}</h1>
        <p className="text-xl sm:text-2xl">Coming Soon!</p>
        <a 
          href="https://github.com/uniyall" 
          className="mt-6 inline-block text-lg text-blue-400 hover:text-blue-600"
        >
          Visit my GitHub
        </a>
      </div>
    </div>
  );
};

export default HomePage;
