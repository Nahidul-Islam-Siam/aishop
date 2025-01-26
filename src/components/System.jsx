'use client';

import React, { useState } from 'react';

const SidebarItem = ({ label, isActive, onClick }) => (
  <button
    className={`w-full  inter-font font-semibold text-base text-left py-2 px-4 rounded-lg transition-colors duration-300 ${
      isActive
        ? 'bg-gradient-to-r  from-blue-500 to-purple-500 text-white hover:bg-gradient-to-l '
        : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

const ContentBox = ({ title, content }) => (
  <div className="bg-gray-900 rounded-xl p-6 flex flex-col space-y-4 ">
    <div className="flex items-center space-x-2">
      <div className="w-2 h-2 rounded-full bg-red-500"></div>
      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
      <div className="w-2 h-2 rounded-full bg-green-500"></div>
    </div>
    <h2 className="text-gray-500 border-b  border-[#313342] font-semibold pb-4">{title}</h2>
    <div className="text-gray-100 inter-font  font-semibold text-lg space-y-2">
      {content.map((item, index) => (
        <p className='border-b pb-4 text-base   border-[#313342] inter-font font-semibold' key={index}>{item}</p>
      ))}
    </div>
  </div>
);

const System = () => {
  const [activeTab, setActiveTab] = useState('Blog Headlines');

  const contentData = {
    'Blog Headlines': {
      title: '4 Blog Headlines Generated',
      content: [
        'Create original content that ranks for SEO',
        'Any mechanical keyboard enthusiasts in design?',
        'The More Important the Work, the More Important the Rest',
        'How to design a product that can grow itself 10x in year',
        'Any mechanical keyboard enthusiasts in design?',
      ],
    },
    'Blog Intros': { title: 'Blog Intros', content: [] },
    'Content Rewriter': { title: 'Content Rewriter', content: [] },
    'Facebook Ads': { title: 'Facebook Ads', content: [] },
    'Product Description': { title: 'Product Description', content: [] },
    'PAS Copywriting Formula': { title: 'PAS Copywriting Formula', content: [] },
  };

  return (

<div className='bg-black'>
    
<header className='text-center mb-12'>
    <h1 className='outfit-font font-semibold text-white text-[42px] md:text-4xl text-center mb-6'>
      Make the wise decision <br/>for your business
    </h1>
    <p className='inter-font text-lg text-gray-300'>Choose from our affordable 3 packages</p>
  </header>
    <div className='bg-black px-2'>
    <div className="  flex flex-col md:flex-row p-4 md:p-8 space-y-4 md:space-y-0 mx-8 md:space-x-8">
      {/* Sidebar */}
      <div className="w-full md:w-64 flex flex-col space-y-2">
        {Object.keys(contentData).map((key) => (
          <SidebarItem
            key={key}
            label={key}
            isActive={activeTab === key}
            onClick={() => setActiveTab(key)}
          />
        ))}
      </div>

      {/* Content */}
      <div className="flex-1">
        <ContentBox {...contentData[activeTab]} />
      </div>
    </div>
    </div>
</div>
  );
};

export default System;
