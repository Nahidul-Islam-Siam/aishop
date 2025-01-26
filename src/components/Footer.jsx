import React from 'react';

const Footer = () => {
  const footerData = {
    Company: ['About', 'Features', 'Works', 'Career'],
    Help: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'],
    Resources: ['Free eBooks', 'Development Tutorial', 'How to Blog', 'Youtube Playlist'],
    Links: ['Free eBooks', 'Development Tutorial', 'How to Blog', 'Youtube Playlist'],
  };

  return (
    <footer className="bg-black py-12 px-8"> {/* Dark background */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-white"> {/* Responsive grid */}
        {Object.entries(footerData).map(([title, items]) => (
          <div key={title}>
            <h4 className="text-base inter-font font-semibold mb-4">{title}</h4>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 inter-font text-sm hover:text-white transition duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container mx-auto mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} Made By Nahidul Islam Siam. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;