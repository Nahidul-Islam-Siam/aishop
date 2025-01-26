import React from 'react';
import Image from 'next/image';
import { FaTwitter } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Darrell Steward',
    handle: '@danais',
    text: 'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.',
    hashtags: ['#another'],
    image: '/Ellipse 14.svg',
  },
  {
    name: 'Leslie Alexander',
    handle: '@lessie',
    text: 'Simply the best. Better than all the rest, I\'d recommend this product to beginners and advanced users.',
    hashtags: ['#postcrafts'],
    image: '/Ellipse 14.svg',
  },
  {
    name: 'Jenny Wilson',
    handle: '@jennywilson',
    text: 'This is a top quality product. No need to think twice before making it live on web.',
    hashtags: ['#make_it_fast'],
    image: '/Ellipse 14.svg',
  },
  {
    name: 'Kristin Watson',
    handle: '@kristinwatson2',
    text: "Finally, I've found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.",
    hashtags: ['#postcrafts'],
    image: '/Ellipse 14.svg',
  },
  {
    name: 'Guy Hawkins',
    handle: '@jennywilson',
    text: 'This is a top quality product. No need to think twice before making it live on web.',
    hashtags: ['#make_it_fast'],
    image: '/Ellipse 14.svg',
  },
  {
    name: 'Marvin McKinney',
    handle: '@jennywilson',
    text: "With Postcrafts, it's quicker with the customer, the customer is more ensured of getting exactly what they ordered, and I'm all for the efficiency.",
    hashtags: ['#dev', '#tools'],
    image: '/Ellipse 14.svg',
  },
  {
    name: 'Annette Black',
    handle: '@jennyson',
    text: 'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.',
    hashtags: ['#another'],
    image: '/Ellipse 14.svg',
  },
  {
    name: 'Floyd Miles',
    handle: '@jennywilson',
    text: 'My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.',
    hashtags: ['#postcrafts'],
    image: '/Ellipse 14.svg',
  },
];

const Testimonials = () => {
  return (
   <div className='bg-black '>
               <header className='text-center '>
        <h1 className='outfit-font font-semibold text-white text-[42px] md:text-4xl text-center mb-6'>
   What our customers say
        </h1>
        <p className='inter-font text-lg text-gray-300'>Read why thousands of marketers, writters, and enterpreneurs love us so much.</p>
      </header>
     <div className=" py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md flex flex-col space-y-4"
            >
              <div className="flex items-start mb-4">
                {/* Image wrapper with position relative and fixed dimensions */}
                <div className="relative w-10 h-10 mr-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    layout="fill" // Ensure it fills the parent container
                    objectFit="cover" // Make the image cover the area
                    className="rounded-full"
                  />
                </div>

                <div>
                  <div className="flex items-center mb-1">
                    <h3 className="text-lg font-medium text-gray-900 mr-1">
                      {testimonial.name}
                    </h3>
                    <FaTwitter className="text-blue-400 text-sm" />
                  </div>
                  <p className="text-gray-500 text-sm">{testimonial.handle}</p>
                </div>
              </div>

              <p className="text-gray-800">{testimonial.text}</p>

              <div className="flex flex-wrap mt-4">
                {testimonial.hashtags.map((hashtag, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 mr-2 mb-1 text-xs"
                  >
                    {hashtag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   </div>
  );
};

export default Testimonials;
