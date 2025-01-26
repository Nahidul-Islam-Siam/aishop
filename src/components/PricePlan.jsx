import React from 'react';

const Pricing = () => {
    const plans = [
        {
          name: 'Starter Plan',
          price: '$29',
          users: '1-15 people',
          features: [
            '10 GB Dedicated Hosting Free',
            'Best for Developers, Freelancers',
            '1 Year Support',
          ],
          highlight: false,
        },
        {
          name: 'Basic Plan',
          price: '$79',
          users: '1-50 people',
          features: [
            '15 GB Dedicated Hosting Free',
            'Best for Developers, Freelancers',
            '5 Year Support',
            'Free Custom Domain',
            'Basic Statistics',
          ],
          highlight: true,
        },
        {
          name: 'Premium Plan',
          price: '$129',
          users: '1-100 people',
          features: [
            '20 GB Dedicated Hosting Free',
            'Best for Developers, Freelancers',
            'Unlimited Support',
            'Free Custom Domain',
            'Full Statistics',
          ],
          highlight: false,
        },
      ];

  return (
    <div className="bg-black py-12 px-6 md:px-28">
      <header className='text-center mb-12'>
        <h1 className='outfit-font font-semibold text-white text-[42px] md:text-4xl text-center mb-6'>
          Make the wise decision <br/>for your business
        </h1>
        <p className='inter-font text-lg text-gray-300'>Choose from our affordable 3 packages</p>
      </header>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-[#282A37] rounded-2xl p-6 md:p-8 flex flex-col ${
              plan.highlight ? 'scale-105' : ''
            } transition duration-300 hover:scale-105`}
          >
            <div>
              <h3 className="text-sm md:text-base inter-font text-white mb-4 font-normal">{plan.name}</h3>
              <div className="text-[32px] md:text-[42px] outfit-font font-semibold text-white mb-2">
                {plan.price}
                <span className="text-sm md:text-lg text-white outfit-font font-normal">/month</span>
              </div>
              <p className="text-gray-300 inter-font text-xs md:text-sm mb-14">
                This package is suitable for teams <br/> {plan.users}.
              </p>
              <h4 className="text-sm md:text-base font-bold text-white mb-4">
                What's included:
              </h4>
              <ul className="text-gray-300 inter-font text-xs md:text-sm space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="mt-auto">
              <button
                className={`w-full py-2 rounded-md inter-font font-bold text-sm md:text-base transition duration-300 ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:bg-gradient-to-l'
                    : 'bg-none border border-black text-gray-300 hover:bg-gray-600 hover:text-white'
                }`}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
