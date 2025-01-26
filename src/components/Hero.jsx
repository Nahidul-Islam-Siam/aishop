import React from 'react';
import Button from './Button';

const HeroSection = () => {
return (
    <div className="bg-black border-b border-[#252835] text-white py-24 px-8 md:px-16 lg:px-32 flex flex-col items-center justify-center min-h-[50vh]">
        <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium outfit-font mb-4 leading-tight">
                Write better <br />
                content for your <br />
                <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    Facebook Ads
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
                </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-500">
                Artificial intelligence writing tool helps you create blogs, <br/> social media websites and much more.
            </p>
            <Button>
                Start 14 Days Free Trial
            </Button>
            <div className='mt-8'>
                <a href="#" className="text-gray-400 hover:text-white flex items-center justify-center">
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