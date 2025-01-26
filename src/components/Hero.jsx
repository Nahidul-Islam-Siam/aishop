import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-black text-white py-24 px-8 md:px-16 lg:px-32 flex flex-col items-center justify-center min-h-[50vh]">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Write better <br />
          content for your <br />
          <span className="relative">
            Facebook Ads
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-400">
          Artificial intelligence writing tool helps you create blogs, social media websites and much more.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-md">
            Start 14 Days Free Trial
          </button>
          <a href="#" className="text-gray-400 hover:text-white flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.131a1 1 0 00-.766 0l-3.197 2.131a1 1 0 000 1.536l3.197 2.131a1 1 0 00.766 0l3.197-2.131a1 1 0 000-1.536z" />
            </svg>
            Watch A Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;